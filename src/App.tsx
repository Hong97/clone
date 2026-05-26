import { Routes, Route } from "react-router-dom";
import Hub from "./pages/Hub";
import Nirok from "./pages/Nirok";
import Grok from "./pages/Grok";
import XenithTrading from "./pages/XenithTrading";
import XenithAI from "./pages/XenithAI";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/nirok" element={<Nirok />} />
      <Route path="/grok" element={<Grok />} />
      <Route path="/xenith-trading" element={<XenithTrading />} />
      <Route path="/xenith-ai" element={<XenithAI />} />
    </Routes>
  );
}
