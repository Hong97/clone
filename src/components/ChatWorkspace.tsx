import React, { useState, useRef, useEffect } from "react";
import { ArrowUp, CornerDownLeft, Sparkles, X, Terminal, ExternalLink, RefreshCw, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Message } from "../types";
import XenithLogo from "./XenithLogo";

interface ChatWorkspaceProps {
  initialPrompt?: string;
  onClose: () => void;
}

export default function ChatWorkspace({ initialPrompt = "", onClose }: ChatWorkspaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with optional initial query
  useEffect(() => {
    if (initialPrompt.trim()) {
      handleQuery(initialPrompt);
    } else {
      // Welcome message
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "Welcome to Xenith AI! You can ask questions about how digital assets work, check market definitions, or request simulated calculations. I am connected to live web search so I can find current information.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [initialPrompt]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleQuery = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      });

      if (!response.ok) {
        throw new Error("Failed to reach Xenith server");
      }

      const data = await response.json();
      
      const assistantMsg: Message = {
        id: Math.random().toString(36).substr(2, 9),
        role: "assistant",
        content: data.content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources: data.sources
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      setMessages(prev => [
        ...prev,
        {
          id: Math.random().toString(36).substr(2, 9),
          role: "assistant",
          content: `Connecting issue: Could not reach the AI server right now (${err.message}). please try again shortly.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggest = (promptText: string) => {
    setInputValue(promptText);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className="relative flex h-[620px] w-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#090707]/95 shadow-2xl backdrop-blur-2xl"
    >
      {/* Workspace Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] border border-white/10 p-1">
            <XenithLogo size={22} />
          </div>
          <div>
            <div className="text-xs tracking-wide font-medium text-white">Xenith AI Assistant</div>
            <div className="text-[10px] tracking-wide text-white/40">Safe Simulation Sandbox</div>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="rounded-full border border-white/10 p-1.5 hover:border-white/35 text-white/50 hover:text-white transition"
        >
          <X size={14} />
        </button>
      </div>

      {/* Messages body */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {messages.map((msg, idx) => (
          <div 
            key={msg.id} 
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-center gap-2 mb-1.5 text-[10px] tracking-wide text-white/30 ">
              <span>{msg.role === 'user' ? 'You' : 'Xenith'}</span>
              <span>•</span>
              <span>{msg.timestamp}</span>
            </div>

            <div 
              className={`max-w-[85%] rounded-2xl p-4 text-sm leading-6 border transition-all ${
                msg.role === 'user' 
                  ? 'bg-white/[0.04] border-white/10 text-white rounded-tr-none' 
                  : 'bg-black/30 border-white/5 text-white/85 rounded-tl-none font-sans'
              }`}
            >
              {/* Parse text simple styling for markdown tables or lists */}
              <div className="space-y-2 whitespace-pre-wrap">
                {msg.content}
              </div>

              {/* Dynamic search source tags */}
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-4 pt-3 border-t border-white/5">
                  <div className="text-[10px] tracking-wide text-white/35  flex items-center gap-1.5 mb-2">
                    <Layers size={10} /> Grounding Sources ({msg.sources.length})
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {msg.sources.map((src, sIdx) => (
                      <a
                        key={sIdx}
                        href={src.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded bg-white/[0.03] hover:bg-white/[0.08] px-2.5 py-1 text-[11px]  text-white/60 hover:text-white border border-white/5 transition"
                      >
                        <span className="truncate max-w-[140px]">{src.title}</span>
                        <ExternalLink size={10} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-1 text-[10px] tracking-wide text-white/30  flex-wrap">
              <span>Xenith AI</span>
              <span>•</span>
              <span className="animate-pulse">Searching and writing...</span>
            </div>
            <div className="max-w-[180px] rounded-2xl rounded-tl-none bg-black/40 border border-white/5 p-4 text-sm flex items-center gap-3 text-white/55">
              <RefreshCw size={14} className="animate-spin text-white" />
              <span>Synthesizing...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested prompts if queue is short */}
      {messages.length < 3 && (
        <div className="px-6 py-2 border-t border-white/5 bg-black/20">
          <div className="text-[9px] tracking-wide text-white/30 mb-2 ">Suggested Inquiries</div>
          <div className="flex flex-wrap gap-1.5 pb-1">
            {[
              "What is a digital wallet portfolio?",
              "How can I transfer coins easily?",
              "Explain Xenith's security practices.",
              "Explain what digital assets are."
            ].map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggest(p)}
                className="text-left rounded-full bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 px-3 py-1.5 text-[10px] text-white/50 hover:text-white transition cursor-pointer"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input panel */}
      <div className="border-t border-white/10 bg-[#060505] p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleQuery(inputValue);
          }}
          className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/40 px-4 py-3"
        >
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35 font-sans"
            placeholder="Type a question and ask anything..."
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="grid h-8 w-8 place-items-center rounded-full bg-white text-black hover:bg-[#f2d9a1] disabled:bg-white/20 disabled:text-white/40 transition cursor-pointer"
          >
            <ArrowUp size={14} />
          </button>
        </form>
      </div>
    </motion.div>
  );
}
