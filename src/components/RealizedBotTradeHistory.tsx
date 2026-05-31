import React, { useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Trade {
  id: string;
  pair: string;
  direction: "LONG" | "SHORT";
  quantity: string;
  entryPrice: string;
  exitPrice: string;
  pnl: number;
  source: string;
}

const TRADES: Trade[] = [
  {
    id: "1",
    pair: "",
    direction: "LONG",
    quantity: "",
    entryPrice: "82.22",
    exitPrice: "81.97",
    pnl: -32.50,
    source: "BITCANO AI",
  },
  {
    id: "2",
    pair: "ADAUSDT",
    direction: "LONG",
    quantity: "1012722.144",
    entryPrice: "0.23",
    exitPrice: "0.23",
    pnl: 519.36,
    source: "BITCANO AI",
  },
  {
    id: "3",
    pair: "LINKUSDT",
    direction: "LONG",
    quantity: "31613.019",
    entryPrice: "9.02",
    exitPrice: "9.15",
    pnl: 4052.29,
    source: "BITCANO AI",
  },
  {
    id: "4",
    pair: "XRPUSDT",
    direction: "LONG",
    quantity: "230395.954",
    entryPrice: "1.32",
    exitPrice: "1.34",
    pnl: 3502.85,
    source: "BITCANO AI",
  },
];

export default function RealizedBotTradeHistory() {
  const [showArchived, setShowArchived] = useState(false);

  return (
    <div className="w-full rounded-2xl bg-[#0b0f18] border border-white/[0.06] p-5 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-bold tracking-[0.18em] text-white uppercase">
          Realized Bot Trade History
        </h2>
        <button
          onClick={() => setShowArchived(!showArchived)}
          className="text-[9px] tracking-[0.18em] font-bold text-white/60 border border-white/10 hover:border-white/25 hover:text-white/90 rounded px-3 py-1.5 transition uppercase cursor-pointer"
        >
          Archived Logs
        </button>
      </div>

      {/* Trade list */}
      <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
        {TRADES.map((trade) => {
          const isProfit = trade.pnl >= 0;
          return (
            <div
              key={trade.id}
              className="rounded-xl border border-white/[0.07] bg-[#111827]/60 px-4 py-3 flex items-center justify-between gap-4"
            >
              {/* Left: pair info */}
              <div className="flex-1 min-w-0">
                {trade.pair ? (
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-white tracking-wide">
                      {trade.pair}
                    </span>
                    <span className="text-[9px] font-bold tracking-wider text-emerald-400 border border-emerald-400/30 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                      {trade.direction}
                    </span>
                    <span className="text-[10px] text-white/40">
                      {trade.quantity}
                    </span>
                  </div>
                ) : null}
                <div className="text-[10px] text-white/45 tracking-wide">
                  ${trade.entryPrice}{" "}
                  <span className="text-white/25 mx-1">→</span>
                  ${trade.exitPrice}
                </div>
              </div>

              {/* Right: PnL + source */}
              <div className="text-right shrink-0">
                <div
                  className={`text-sm font-bold mb-0.5 ${
                    isProfit ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {isProfit ? "+" : ""}${Math.abs(trade.pnl).toFixed(2)}
                </div>
                <div
                  className={`flex items-center justify-end gap-1 text-[9px] tracking-[0.12em] font-bold ${
                    isProfit ? "text-emerald-400/70" : "text-red-400/70"
                  }`}
                >
                  {isProfit ? (
                    <ArrowUpRight size={11} />
                  ) : (
                    <ArrowDownRight size={11} />
                  )}
                  <span>{trade.source}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
