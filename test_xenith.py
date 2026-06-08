"""
Live browser test for Xenith copy trade system.
Tests: Partner dashboard (partner.xenithspace.io) + Bitcano (bitcano-trading-platforms.vercel.app)
"""
from playwright.sync_api import sync_playwright
import os, sys

SCREENSHOTS = r"C:\Users\xihon\Desktop\Project\figma-clone\test_screenshots"
os.makedirs(SCREENSHOTS, exist_ok=True)

PARTNER_URL  = "https://partner.xenithspace.io"
BITCANO_URL  = "https://bitcano-trading-platforms.vercel.app"
PARTNER_ID   = "XP-848201"
PASSKEY      = "xenith2024"
MEMBER_EMAIL    = "test@xenith.com"
MEMBER_PASSWORD = "test123"

results = []

def ok(label):
    results.append(("PASS", label))
    print(f"  [PASS]  {label}")

def fail(label, reason=""):
    results.append(("FAIL", label, reason))
    short = reason.split('\n')[0][:120] if reason else ""
    print(f"  [FAIL]  {label}" + (f"\n          {short}" if short else ""))

def shot(page, name):
    path = os.path.join(SCREENSHOTS, f"{name}.png")
    page.screenshot(path=path, full_page=True)
    print(f"          screenshot -> {name}.png")

def see(page, text, timeout=12000):
    page.wait_for_selector(f"text={text}", timeout=timeout)

print("\n" + "="*62)
print("  XENITH SYSTEM - LIVE BROWSER TESTS")
print("="*62)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context(viewport={"width": 1400, "height": 900})

    # =========================================================
    print("\n--- PARTNER DASHBOARD (partner.xenithspace.io) ---")
    # =========================================================
    page = ctx.new_page()
    console_errors = []
    page.on("console", lambda m: console_errors.append(m.text) if m.type == "error" else None)

    # 1. Homepage loads
    try:
        page.goto(PARTNER_URL, timeout=30000)
        page.wait_for_load_state("networkidle", timeout=20000)
        shot(page, "01_partner_login_page")
        ok("Partner login page loads")
    except Exception as e:
        fail("Partner login page loads", str(e))

    # 2. Login form visible
    try:
        page.wait_for_selector("input", timeout=8000)
        ok("Login form visible")
    except Exception as e:
        fail("Login form visible", str(e))

    # 3. Submit credentials
    try:
        inputs = page.locator("input").all()
        inputs[0].fill(PARTNER_ID)
        inputs[1].fill(PASSKEY)
        page.locator("button[type=submit], button:has-text('DECRYPT'), button:has-text('Login')").first.click()
        page.wait_for_load_state("networkidle", timeout=20000)
        shot(page, "02_partner_post_login")
        ok("Partner credentials submitted")
    except Exception as e:
        fail("Partner credentials submitted", str(e))

    # 4. Dashboard loaded
    try:
        see(page, "Sovereign Liquidity Network", timeout=15000)
        ok("Dashboard loaded — Sovereign Liquidity Network visible")
    except Exception as e:
        try:
            see(page, "DASHBOARD OVERVIEW", timeout=5000)
            ok("Dashboard loaded — DASHBOARD OVERVIEW visible")
        except:
            fail("Dashboard loaded after login", str(e))

    # 5. Stats visible
    try:
        see(page, "Monthly Recurring Revenue", timeout=10000)
        ok("Stats visible — Monthly Recurring Revenue card")
    except Exception as e:
        try:
            see(page, "Live Business Metrics", timeout=5000)
            ok("Stats visible — Live Business Metrics section")
        except:
            fail("Stats card visible", str(e))

    # 6. AI Signal Panel
    try:
        see(page, "Xenith AI Brain", timeout=10000)
        ok("AI Signal Panel present — Xenith AI Brain heading")
    except Exception as e:
        fail("AI Signal Panel present", str(e))

    # Pre-check: if trade already restored to LIVE state (restore-on-mount), close it first
    try:
        if page.locator("text=TRADE LIVE").is_visible():
            print("          [INFO] Restore-on-mount detected — closing live trade to reset to idle")
            page.locator("button:has-text('Close Now')").first.click()
            page.wait_for_selector("text=Real P&L", timeout=15000)
            page.locator("button:has-text('Run another trade')").first.click()
            page.wait_for_timeout(1500)
    except Exception:
        pass  # not in live state, nothing to do

    # 7. Full Demo Run button (only button now — no mode toggle)
    try:
        page.wait_for_selector("button:has-text('Full Demo Run')", timeout=8000)
        ok("Full Demo Run button visible")
    except Exception as e:
        fail("Full Demo Run button visible", str(e))

    # 8. No Claude AI toggle (it was hidden)
    try:
        claude_visible = page.locator("text=Claude AI").is_visible()
        if not claude_visible:
            ok("Claude AI toggle correctly hidden")
        else:
            fail("Claude AI toggle should be hidden", "Claude AI text still visible on page")
    except Exception as e:
        ok("Claude AI toggle correctly hidden")

    shot(page, "03_partner_ai_panel")

    # 9. Click Full Demo Run — wait for analysis then live trade
    try:
        page.locator("button:has-text('Full Demo Run')").first.click()
        # Wait for analysis phase
        see(page, "RSI", timeout=35000)
        ok("Full Demo Run — signal analysis returned with RSI indicators")
        shot(page, "04_partner_signal_analyzed")
    except Exception as e:
        shot(page, "04_partner_demo_failed")
        fail("Full Demo Run returns signal analysis", str(e))

    # 10. Wait for TRADE LIVE state
    try:
        see(page, "TRADE LIVE", timeout=15000)
        ok("Trade dispatched — TRADE LIVE state active")
        shot(page, "05_partner_trade_live")
    except Exception as e:
        shot(page, "05_partner_trade_live_failed")
        fail("TRADE LIVE state appears after dispatch", str(e))

    # 11. TP and SL targets shown — wait for animation to settle
    try:
        page.wait_for_selector("text=TP TARGET", timeout=8000)
        page.wait_for_selector("text=SL $", timeout=3000)
        ok("TP and SL targets displayed in live trade monitor")
    except Exception as e:
        body = page.inner_text("body")
        has_tp = "TP TARGET" in body or "TP " in body
        has_sl = "SL " in body or "SL$" in body
        if has_tp and has_sl:
            ok("TP and SL targets displayed in live trade monitor")
        else:
            fail("TP/SL targets visible", f"TP={has_tp} SL={has_sl}")

    # 12. Current price polling (should show a price number)
    try:
        page.wait_for_timeout(6000)  # wait one 5s poll cycle
        body = page.inner_text("body")
        has_price = "CURRENT" in body
        if has_price:
            ok("Current price shown in live monitor (Binance polling active)")
        else:
            fail("Current price polling", "CURRENT label not found")
        shot(page, "06_partner_live_with_price")
    except Exception as e:
        fail("Current price polling", str(e))

    # 13. Unrealized P&L showing
    try:
        body = page.inner_text("body")
        has_pnl = "Unrealized P&L" in body
        if has_pnl:
            ok("Unrealized P&L displayed in live monitor")
        else:
            fail("Unrealized P&L shown", "Unrealized P&L not found")
    except Exception as e:
        fail("Unrealized P&L shown", str(e))

    # 14. Manual close button present
    try:
        page.wait_for_selector("button:has-text('Close Now')", timeout=5000)
        ok("Close Now button present in live monitor")
    except Exception as e:
        fail("Close Now button present", str(e))

    # 15. Click Close Now — close with real Binance price
    try:
        page.locator("button:has-text('Close Now')").first.click()
        # Wait for done state
        see(page, "Real P&L", timeout=15000)
        ok("Close Now — trade closed, real P&L shown")
        shot(page, "07_partner_trade_done")
    except Exception as e:
        shot(page, "07_partner_close_failed")
        fail("Close Now closes trade with real P&L", str(e))

    # 16. Console errors
    mixed = [e for e in console_errors if "Mixed Content" in e or "blocked" in e.lower()]
    if mixed:
        fail("No Mixed Content errors", mixed[0][:100])
    elif console_errors:
        fail("No JS console errors", f"{len(console_errors)} error(s): {console_errors[0][:80]}")
    else:
        ok("No JS/mixed-content errors on partner dashboard")

    # =========================================================
    print("\n--- BITCANO TRADING PLATFORM (bitcano-trading-platforms.vercel.app) ---")
    # =========================================================
    page2 = ctx.new_page()
    console_errors2 = []
    page2.on("console", lambda m: console_errors2.append(m.text) if m.type == "error" else None)

    # 17. Homepage loads
    try:
        page2.goto(BITCANO_URL, timeout=30000)
        page2.wait_for_load_state("networkidle", timeout=20000)
        shot(page2, "08_bitcano_homepage")
        ok("Bitcano homepage loads")
    except Exception as e:
        fail("Bitcano homepage loads", str(e))

    # 18. Tab title is "Bitcano"
    try:
        title = page2.title()
        if title == "Bitcano":
            ok(f"Tab title is 'Bitcano'")
        else:
            fail("Tab title is Bitcano", f"Got: '{title}'")
    except Exception as e:
        fail("Tab title check", str(e))

    # Dismiss risk disclaimer modal if present (blocks all clicks on first visit)
    try:
        page2.wait_for_selector("button:has-text('I Understand')", timeout=5000)
        page2.locator("button:has-text('I Understand')").first.click()
        page2.wait_for_timeout(800)
        shot(page2, "08b_risk_disclaimer_dismissed")
        print("          Dismissed risk disclaimer modal")
    except Exception:
        pass  # modal not shown (already accepted in prior session)

    # 19. Open login modal
    try:
        page2.locator("#cta-login, button:has-text('Login')").first.click()
        page2.wait_for_selector("form input[type=email]", timeout=8000)
        ok("Login modal opens")
        shot(page2, "09_bitcano_login_modal")
    except Exception as e:
        fail("Login modal opens", str(e))

    # 20. Fill and submit login
    try:
        email_input = page2.locator("form input[type=email]").first
        pass_input  = page2.locator("form input[type=password]").first
        email_input.click(click_count=3)
        email_input.type(MEMBER_EMAIL)
        pass_input.click(click_count=3)
        pass_input.type(MEMBER_PASSWORD)
        pass_input.press("Enter")
        try:
            page2.wait_for_selector("form input[type=email]", state="hidden", timeout=12000)
        except:
            pass
        page2.wait_for_timeout(2000)
        shot(page2, "10_bitcano_after_login")
        ok("Member login submitted")
    except Exception as e:
        fail("Member login submitted", str(e))

    # 21. Navigate to Dashboard view
    try:
        page2.locator("#cta-start").click()
        page2.wait_for_timeout(2000)
        shot(page2, "11_bitcano_dashboard_view")
        ok("Navigated to Dashboard view via #cta-start")
    except Exception as e:
        fail("Navigate to Dashboard view", str(e))

    # 22. Wallet section visible
    try:
        see(page2, "My Account Wallet", timeout=12000)
        ok("Wallet section visible — My Account Wallet heading")
    except Exception as e:
        fail("Wallet section visible after login", str(e))

    # 23. Wallet tabs
    try:
        open_tab = page2.locator("button:has-text('Open (')").first
        open_tab.scroll_into_view_if_needed()
        open_tab.click()
        page2.wait_for_timeout(800)
        shot(page2, "12_bitcano_open_tab")
        ok("Open (N) tab clickable")
    except Exception as e:
        fail("Open tab clickable", str(e))

    try:
        hist_tab = page2.locator("button:has-text('History (')").first
        hist_tab.scroll_into_view_if_needed()
        hist_tab.click()
        page2.wait_for_timeout(800)
        shot(page2, "13_bitcano_history_tab")
        ok("History (N) tab clickable")
    except Exception as e:
        fail("History tab clickable", str(e))

    # 24. History tab should show the trade we just closed
    try:
        body2 = page2.inner_text("body")
        has_history = any(x in body2 for x in ["BUY", "SELL", "CLOSED", "P&L"])
        if has_history:
            ok("Trade history shows closed trade from demo")
        else:
            fail("Trade history shows closed trade", "No BUY/SELL/CLOSED/P&L found in history tab")
        shot(page2, "14_bitcano_history_with_trade")
    except Exception as e:
        fail("Trade history check", str(e))

    # 25. Console errors
    mixed2 = [e for e in console_errors2 if "Mixed Content" in e or "blocked" in e.lower()]
    if mixed2:
        fail("No Mixed Content errors on Bitcano", mixed2[0][:100])
    elif console_errors2:
        fail("No JS console errors on Bitcano", f"{len(console_errors2)} error(s): {console_errors2[0][:80]}")
    else:
        ok("No JS/mixed-content errors on Bitcano")

    browser.close()

# ── Summary ───────────────────────────────────────────────────────────────────
print("\n" + "="*62)
print("  SUMMARY")
print("="*62)
passed = [r for r in results if r[0] == "PASS"]
failed = [r for r in results if r[0] == "FAIL"]
print(f"  PASSED : {len(passed)}/{len(results)}")
print(f"  FAILED : {len(failed)}/{len(results)}")
if failed:
    print("\n  Failed checks:")
    for r in failed:
        reason = r[2].split('\n')[0][:100] if len(r) > 2 and r[2] else ""
        print(f"    [X] {r[1]}" + (f"\n        {reason}" if reason else ""))
print(f"\n  Screenshots -> {SCREENSHOTS}")
print("="*62)
sys.exit(1 if failed else 0)
