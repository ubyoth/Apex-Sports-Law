
import React, { useState, useRef, useEffect } from 'react';
import { askLegalAssistant } from '../services/geminiService';

const LegalAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await askLegalAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || 'I am sorry, I could not process that request.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-display">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-accent-gold p-4 rounded-full shadow-2xl hover:scale-110 transition-all border border-accent-gold/20 flex items-center justify-center gap-2 group"
        >
          <span className="material-icons text-3xl">chat</span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-black uppercase tracking-widest text-xs">AI Assistant</span>
        </button>
      ) : (
        <div className="bg-white dark:bg-black w-[350px] sm:w-[400px] h-[550px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-accent-gold/30 border-b-8 border-b-accent-gold animate-in zoom-in slide-in-from-bottom-10">
          {/* Header */}
          <div className="bg-black p-4 flex justify-between items-center border-b border-accent-gold/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent-gold flex items-center justify-center rounded-lg">
                <span className="material-icons text-black text-xl">gavel</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Legal Guide AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse"></span>
                  <span className="text-accent-gold text-[10px] font-bold uppercase tracking-widest">Active</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-accent-gold transition-colors">
              <span className="material-icons">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 no-scrollbar bg-slate-50 dark:bg-black/95">
            {messages.length === 0 && (
              <div className="text-center py-10 px-4">
                <span className="material-icons text-accent-gold/20 text-6xl mb-4">chat</span>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  Welcome to Apex Advocates. I can help you understand our practice areas and general legal terminology. How can I assist you today?
                </p>
                <div className="mt-8 flex flex-wrap gap-2 justify-center">
                  {['Practice Areas', 'Sports Law Info', 'IP Protection'].map(q => (
                    <button 
                      key={q}
                      onClick={() => setInput(q)}
                      className="text-[10px] font-bold text-accent-gold bg-accent-gold/5 px-4 py-2 rounded-full border border-accent-gold/20 hover:bg-accent-gold hover:text-black transition-all uppercase tracking-wider"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-black text-accent-gold border border-accent-gold/30 rounded-tr-none' 
                    : 'bg-white dark:bg-secondary-grey/20 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-accent-gold/10 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-black/5 dark:bg-secondary-grey/20 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-slate-100 dark:border-accent-gold/20 bg-white dark:bg-black">
            <div className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask our AI legal guide..."
                className="w-full pl-4 pr-12 py-4 bg-slate-100 dark:bg-secondary-grey/30 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-accent-gold/20 dark:text-white"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-accent-gold p-1 hover:scale-110 transition-transform disabled:opacity-50"
              >
                <span className="material-icons">send</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LegalAssistant;
