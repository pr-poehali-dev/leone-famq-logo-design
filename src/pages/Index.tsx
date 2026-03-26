import { useState } from "react";
import Icon from "@/components/ui/icon";

const LION_LOGO = "https://cdn.poehali.dev/projects/60678f26-c31a-46b3-8353-0df34a30485b/files/cbdbc711-e27a-4232-a239-96d93e25e2bf.jpg";

type Section = "home" | "profile" | "messages" | "discussions" | "events";

const navItems: { id: Section; label: string; icon: string }[] = [
  { id: "home",        label: "Главная",     icon: "Home" },
  { id: "profile",    label: "Профиль",     icon: "User" },
  { id: "messages",   label: "Сообщения",   icon: "MessageSquare" },
  { id: "discussions",label: "Обсуждения",  icon: "MessagesSquare" },
  { id: "events",     label: "События",     icon: "Calendar" },
];

const members = [
  { name: "Alessandro R.", role: "Основатель", avatar: "AR", online: true },
  { name: "Maria Leone",   role: "Куратор",    avatar: "ML", online: true },
  { name: "Viktor Sokolov",role: "Участник",   avatar: "VS", online: false },
  { name: "Elena Forte",   role: "Участник",   avatar: "EF", online: true },
];

const discussions = [
  { title: "Стратегия развития Q3 2026", replies: 14, time: "2ч назад", hot: true },
  { title: "Новые правила участия в сообществе", replies: 8, time: "5ч назад", hot: false },
  { title: "Запрос на партнёрство — Europe Hub", replies: 22, time: "1д назад", hot: true },
  { title: "Итоги встречи в Милане", replies: 6, time: "3д назад", hot: false },
];

const events = [
  { title: "Встреча лидеров Leone FamQ", date: "12 апр", location: "Москва", type: "offline" },
  { title: "Онлайн-сессия: Стратегия 2026", date: "18 апр", location: "Zoom", type: "online" },
  { title: "Закрытый ужин участников", date: "25 апр", location: "Милан", type: "offline" },
  { title: "Вебинар: Расширение сети", date: "3 май",  location: "Teams", type: "online" },
];

const messages = [
  { from: "Alessandro R.", text: "Добро пожаловать в Leone FamQ!", time: "10:02", avatar: "AR", unread: 2 },
  { from: "Maria Leone",   text: "Документы для встречи прикрепила.", time: "09:45", avatar: "ML", unread: 0 },
  { from: "Viktor Sokolov",text: "Буду на следующей встрече.", time: "Вчера", avatar: "VS", unread: 1 },
  { from: "Elena Forte",   text: "Спасибо за приглашение!",         time: "Вчера", avatar: "EF", unread: 0 },
];

export default function Index() {
  const [active, setActive] = useState<Section>("home");
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8D89A] flex flex-col">

      {/* TOP HEADER */}
      <header className="border-b border-[#1F1F1F] px-6 py-3 flex items-center justify-between sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/40" style={{boxShadow: "0 0 12px rgba(212,175,55,0.2)"}}>
            <img src={LION_LOGO} alt="Leone FamQ" className="w-full h-full object-cover" />
          </div>
          <span className="font-display text-xl font-semibold tracking-widest" style={{background: "linear-gradient(90deg,#D4AF37 0%,#F0C84A 40%,#D4AF37 60%,#8B7218 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
            Leone FamQ
          </span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`px-4 py-2 text-sm font-body font-medium tracking-wide transition-all duration-200 rounded-sm flex items-center gap-2
                ${active === item.id
                  ? "text-[#D4AF37] border-b-2 border-[#D4AF37]"
                  : "text-[#8B7218] hover:text-[#D4AF37]"
                }`}
            >
              <Icon name={item.icon} size={15} />
              {item.label}
            </button>
          ))}
        </div>
        <button className="md:hidden text-[#D4AF37]" onClick={() => setMobileNav(!mobileNav)}>
          <Icon name={mobileNav ? "X" : "Menu"} size={22} />
        </button>
      </header>

      {/* MOBILE NAV DROPDOWN */}
      {mobileNav && (
        <nav className="md:hidden bg-[#0D0D0D] border-b border-[#1F1F1F] px-4 py-2 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); setMobileNav(false); }}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-body tracking-wide rounded-sm transition-all
                ${active === item.id ? "text-[#D4AF37] bg-[#D4AF37]/5" : "text-[#8B7218] hover:text-[#D4AF37]"}`}
            >
              <Icon name={item.icon} size={16} />
              {item.label}
            </button>
          ))}
        </nav>
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 md:px-8 py-10">

        {/* ── HOME ── */}
        {active === "home" && (
          <div className="space-y-10">
            <div className="text-center space-y-0 animate-fade-in-up delay-100">
              <div className="mx-auto w-52 overflow-hidden border-2 border-[#D4AF37]/60 rounded-sm" style={{boxShadow: "0 0 40px rgba(212,175,55,0.2)"}}>
                <img src={LION_LOGO} alt="Leone FamQ" className="w-full h-full object-cover block" />
                <div className="bg-[#0D0D0D] border-t border-[#D4AF37]/30 py-3 px-4">
                  <h1 className="font-display text-2xl font-bold tracking-widest" style={{background: "linear-gradient(90deg,#D4AF37,#F0C84A,#D4AF37,#8B7218)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>
                    Leone FamQ
                  </h1>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Участников",  value: "128", icon: "Users" },
                { label: "Обсуждений", value: "340", icon: "MessagesSquare" },
                { label: "Событий",    value: "24",  icon: "Calendar" },
                { label: "Онлайн",     value: "17",  icon: "Wifi" },
              ].map((s) => (
                <div key={s.label} className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-sm p-5 text-center hover:border-[#D4AF37]/30 transition-all duration-200" style={{boxShadow: "0 0 20px rgba(212,175,55,0.05)"}}>
                  <Icon name={s.icon} size={20} className="mx-auto mb-2 text-[#D4AF37]" />
                  <div className="font-display text-3xl font-bold text-[#D4AF37]">{s.value}</div>
                  <div className="font-body text-xs text-[#8B7218] tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ── PROFILE ── */}
        {active === "profile" && (
          <div className="space-y-8">
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-sm p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37]/50 flex items-center justify-center flex-shrink-0" style={{boxShadow: "0 0 20px rgba(212,175,55,0.15)"}}>
                <span className="font-display text-[#D4AF37] text-3xl font-bold">ВЫ</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-display text-4xl text-[#D4AF37] font-bold">Ваш Профиль</h1>
                <p className="text-[#8B7218] font-body text-sm mt-1 tracking-wide">Участник Leone FamQ</p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  {["Участник", "Leone FamQ", "2024"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-sm text-[#D4AF37] text-xs font-body tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="px-5 py-2.5 border border-[#D4AF37]/40 text-[#D4AF37] font-body text-sm tracking-wide rounded-sm hover:bg-[#D4AF37]/10 transition-all">
                Редактировать
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Имя",        value: "—",         icon: "User" },
                { label: "Email",      value: "—",         icon: "Mail" },
                { label: "Telegram",   value: "—",         icon: "Send" },
                { label: "Дата входа", value: "Март 2026", icon: "Calendar" },
              ].map((f) => (
                <div key={f.label} className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-sm p-4 flex items-center gap-4 hover:border-[#D4AF37]/20 transition-all">
                  <Icon name={f.icon} size={16} className="text-[#D4AF37] flex-shrink-0" />
                  <div>
                    <div className="font-body text-[10px] text-[#8B7218] tracking-widest uppercase">{f.label}</div>
                    <div className="font-body text-sm text-[#E8D89A] mt-0.5">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#D4AF37] mb-4">Все участники</h2>
              <div className="space-y-2">
                {members.map((m) => (
                  <div key={m.name} className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-sm p-4 flex items-center gap-4 hover:border-[#D4AF37]/20 transition-all">
                    <div className="relative w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-[#D4AF37] text-xs font-bold">{m.avatar}</span>
                      {m.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0D0D0D]" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-body text-sm font-medium text-[#E8D89A]">{m.name}</div>
                      <div className="font-body text-xs text-[#8B7218]">{m.role} · {m.online ? "онлайн" : "не в сети"}</div>
                    </div>
                    <button onClick={() => setActive("messages")} className="text-xs text-[#8B7218] hover:text-[#D4AF37] font-body tracking-wide transition-colors flex items-center gap-1">
                      <Icon name="MessageSquare" size={13} />
                      Написать
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── MESSAGES ── */}
        {active === "messages" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="font-display text-4xl text-[#D4AF37]">Сообщения</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-[#0A0A0A] font-body text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-[#F0C84A] transition-all">
                <Icon name="Plus" size={13} />
                Написать
              </button>
            </div>
            <div className="space-y-2">
              {messages.map((msg) => (
                <div key={msg.from} className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-sm p-4 flex items-center gap-4 hover:border-[#D4AF37]/20 transition-all cursor-pointer group">
                  <div className="w-11 h-11 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-[#D4AF37] text-xs font-bold">{msg.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm font-semibold text-[#E8D89A]">{msg.from}</span>
                      <span className="font-body text-[10px] text-[#8B7218]">{msg.time}</span>
                    </div>
                    <p className="font-body text-xs text-[#8B7218] truncate mt-0.5">{msg.text}</p>
                  </div>
                  {msg.unread > 0 && (
                    <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#0A0A0A] text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      {msg.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-[#0D0D0D] border border-[#D4AF37]/20 rounded-sm p-6 text-center">
              <Icon name="MessageSquare" size={32} className="mx-auto mb-3 text-[#D4AF37]/40" />
              <p className="font-body text-sm text-[#8B7218]">Выберите диалог для начала общения</p>
            </div>
          </div>
        )}

        {/* ── DISCUSSIONS ── */}
        {active === "discussions" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="font-display text-4xl text-[#D4AF37]">Обсуждения</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-[#0A0A0A] font-body text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-[#F0C84A] transition-all">
                <Icon name="Plus" size={13} />
                Создать
              </button>
            </div>
            <div className="space-y-2">
              {discussions.map((d) => (
                <div key={d.title} className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-sm p-5 flex items-start gap-4 hover:border-[#D4AF37]/30 transition-all cursor-pointer group">
                  <div className="w-8 h-8 rounded-sm bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={d.hot ? "Flame" : "MessagesSquare"} size={14} className="text-[#D4AF37]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body text-sm font-medium text-[#E8D89A] group-hover:text-[#D4AF37] transition-colors leading-tight">{d.title}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="font-body text-[10px] text-[#8B7218] flex items-center gap-1">
                        <Icon name="MessageCircle" size={10} />
                        {d.replies} ответов
                      </span>
                      <span className="font-body text-[10px] text-[#8B7218]">{d.time}</span>
                    </div>
                  </div>
                  {d.hot && (
                    <span className="px-2 py-0.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-sm text-[#D4AF37] text-[10px] font-body tracking-wide flex-shrink-0">
                      горячее
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── EVENTS ── */}
        {active === "events" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="font-display text-4xl text-[#D4AF37]">События</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-[#0A0A0A] font-body text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-[#F0C84A] transition-all">
                <Icon name="Plus" size={13} />
                Добавить
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {events.map((ev) => (
                <div key={ev.title} className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-sm p-5 hover:border-[#D4AF37]/30 transition-all cursor-pointer group" style={{boxShadow: "0 0 20px rgba(212,175,55,0.03)"}}>
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-2.5 py-1 rounded-sm text-[10px] font-body tracking-widest uppercase
                      ${ev.type === "offline"
                        ? "bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]"
                        : "bg-[#1F1F1F] border border-[#2A2A2A] text-[#8B7218]"
                      }`}>
                      {ev.type === "offline" ? "Оффлайн" : "Онлайн"}
                    </span>
                    <div className="font-display text-[#D4AF37] text-xl font-bold">{ev.date}</div>
                  </div>
                  <h3 className="font-body text-sm font-semibold text-[#E8D89A] group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug">
                    {ev.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#8B7218]">
                    <Icon name="MapPin" size={11} />
                    <span className="font-body text-[11px]">{ev.location}</span>
                  </div>
                  <button className="mt-4 w-full py-2 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-body tracking-widest uppercase rounded-sm hover:bg-[#D4AF37]/10 transition-all">
                    Участвовать
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* BOTTOM NAV MOBILE */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur border-t border-[#1F1F1F] flex z-50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex-1 flex flex-col items-center gap-1 py-3 text-[10px] font-body tracking-wide transition-all
              ${active === item.id ? "text-[#D4AF37]" : "text-[#4A3A10]"}`}
          >
            <Icon name={item.icon} size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="md:hidden h-16" />
    </div>
  );
}