import { Plane, Globe, MessageCircle, Calendar, DollarSign, Users, Sparkles, MapPin, Coffee, Hotel, Shield, UserPlus, GraduationCap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0f1e35] to-[#1a2942]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyOSwyMTEsMTc2LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1dd3b0]/10 border border-[#1dd3b0]/30 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#1dd3b0]" />
              <span className="text-[#1dd3b0] text-sm">Новый набор открыт!</span>
            </div>

            <h1 className="text-4xl md:text-6xl text-white max-w-4xl mx-auto leading-tight">
              Курс «Английский для путешествий»
            </h1>

            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
            </p>
          </div>

          {/* Decorative Globe Icon */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-[#1dd3b0]/20 blur-3xl rounded-full"></div>
              <Globe className="w-24 h-24 md:w-32 md:h-32 text-[#1dd3b0] relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Users className="w-8 h-8 text-[#f59e0b]" />
            <h2 className="text-3xl md:text-4xl text-white">Для кого курс</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-8 rounded-2xl border border-[#1dd3b0]/20 hover:border-[#1dd3b0]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1dd3b0]/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#1dd3b0]" />
                </div>
                <h3 className="text-2xl text-white">Первая группа</h3>
              </div>
              <p className="text-[#94a3b8] text-lg">4–5 класс</p>
            </div>

            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-8 rounded-2xl border border-[#a78bfa]/20 hover:border-[#a78bfa]/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#a78bfa]/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#a78bfa]" />
                </div>
                <h3 className="text-2xl text-white">Вторая группа</h3>
              </div>
              <p className="text-[#94a3b8] text-lg">6–8 класс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <MessageCircle className="w-8 h-8 text-[#1dd3b0]" />
            <h2 className="text-3xl md:text-4xl text-white">Программа курса</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Module 1 */}
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-6 md:p-8 rounded-2xl border border-[#1dd3b0]/20 hover:shadow-lg hover:shadow-[#1dd3b0]/10 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1dd3b0]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1dd3b0]/20 transition-all">
                  <Plane className="w-6 h-6 text-[#1dd3b0]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-2">Аэропорт без стресса</h3>
                  <p className="text-[#94a3b8] mb-3">Регистрация, паспортный контроль, вопросы на таможне — всё на английском.</p>
                  <div className="flex items-start gap-2">
                    <span className="text-[#1dd3b0] mt-1">👉</span>
                    <p className="text-[#1dd3b0]">Уверенность уже в первые часы за границей.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-6 md:p-8 rounded-2xl border border-[#a78bfa]/20 hover:shadow-lg hover:shadow-[#a78bfa]/10 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#a78bfa]/20 transition-all">
                  <Hotel className="w-6 h-6 text-[#a78bfa]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-2">В отеле: заселение и помощь</h3>
                  <p className="text-[#94a3b8] mb-3">Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.</p>
                  <div className="flex items-start gap-2">
                    <span className="text-[#a78bfa] mt-1">👉</span>
                    <p className="text-[#a78bfa]">Практика вежливых фраз и повседневной лексики.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-6 md:p-8 rounded-2xl border border-[#f59e0b]/20 hover:shadow-lg hover:shadow-[#f59e0b]/10 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f59e0b]/20 transition-all">
                  <Coffee className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-2">Кафе и рестораны</h3>
                  <p className="text-[#94a3b8] mb-3">Заказ еды, вопросы про аллергены, счёт и чаевые.</p>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] mt-1">👉</span>
                    <p className="text-[#f59e0b]">Развитие гастрономического словаря и уверенности в общении.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-6 md:p-8 rounded-2xl border border-[#1dd3b0]/20 hover:shadow-lg hover:shadow-[#1dd3b0]/10 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1dd3b0]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1dd3b0]/20 transition-all">
                  <MapPin className="w-6 h-6 text-[#1dd3b0]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-2">На улице: ориентирование и просьбы</h3>
                  <p className="text-[#94a3b8] mb-3">Как спросить дорогу, вызвать такси или найти аптеку.</p>
                  <div className="flex items-start gap-2">
                    <span className="text-[#1dd3b0] mt-1">👉</span>
                    <p className="text-[#1dd3b0]">Понимание устной речи и произношения в реальных ситуациях.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-6 md:p-8 rounded-2xl border border-[#a78bfa]/20 hover:shadow-lg hover:shadow-[#a78bfa]/10 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#a78bfa]/20 transition-all">
                  <Shield className="w-6 h-6 text-[#a78bfa]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-2">Экстренные случаи</h3>
                  <p className="text-[#94a3b8] mb-3">Потеря вещей, болезнь, помощь полиции — всё это на английском.</p>
                  <div className="flex items-start gap-2">
                    <span className="text-[#a78bfa] mt-1">👉</span>
                    <p className="text-[#a78bfa]">Важные фразы, которые могут спасти отпуск.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-6 md:p-8 rounded-2xl border border-[#f59e0b]/20 hover:shadow-lg hover:shadow-[#f59e0b]/10 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f59e0b]/20 transition-all">
                  <Globe className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-2">Туризм и развлечения</h3>
                  <p className="text-[#94a3b8] mb-3">Покупка билетов, экскурсии, общение с гидами, музеи и парки.</p>
                  <div className="flex items-start gap-2">
                    <span className="text-[#f59e0b] mt-1">👉</span>
                    <p className="text-[#f59e0b]">Погружение в культурный контекст через язык.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 7 */}
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-6 md:p-8 rounded-2xl border border-[#1dd3b0]/20 hover:shadow-lg hover:shadow-[#1dd3b0]/10 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1dd3b0]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1dd3b0]/20 transition-all">
                  <UserPlus className="w-6 h-6 text-[#1dd3b0]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-2">Дружба в путешествиях</h3>
                  <p className="text-[#94a3b8] mb-3">Как познакомиться с другими детьми или подростками за границей.</p>
                  <div className="flex items-start gap-2">
                    <span className="text-[#1dd3b0] mt-1">👉</span>
                    <p className="text-[#1dd3b0]">Игровая практика диалогов и неформального общения.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 8 */}
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-6 md:p-8 rounded-2xl border border-[#a78bfa]/20 hover:shadow-lg hover:shadow-[#a78bfa]/10 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#a78bfa]/20 transition-all">
                  <Sparkles className="w-6 h-6 text-[#a78bfa]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-white mb-2">Дипломный проект: «Мой идеальный отпуск»</h3>
                  <p className="text-[#94a3b8] mb-3">Ребёнок планирует воображаемое путешествие и представляет его на английском.</p>
                  <div className="flex items-start gap-2">
                    <span className="text-[#a78bfa] mt-1">👉</span>
                    <p className="text-[#a78bfa]">Развитие связной речи и творческого самовыражения.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Special */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Sparkles className="w-8 h-8 text-[#f59e0b]" />
            <h2 className="text-3xl md:text-4xl text-white">Почему этот курс особенный?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-6 rounded-2xl border border-[#1dd3b0]/20 text-center">
              <div className="w-16 h-16 rounded-full bg-[#1dd3b0]/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-[#1dd3b0]" />
              </div>
              <p className="text-[#94a3b8]">Акцент на практическую, живую речь, а не на грамматику ради грамматики</p>
            </div>

            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-6 rounded-2xl border border-[#a78bfa]/20 text-center">
              <div className="w-16 h-16 rounded-full bg-[#a78bfa]/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#a78bfa]" />
              </div>
              <p className="text-[#94a3b8]">Все ситуации — из реальной жизни путешественника</p>
            </div>

            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-6 rounded-2xl border border-[#f59e0b]/20 text-center">
              <div className="w-16 h-16 rounded-full bg-[#f59e0b]/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#f59e0b]" />
              </div>
              <p className="text-[#94a3b8]">Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты</p>
            </div>

            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-6 rounded-2xl border border-[#1dd3b0]/20 text-center">
              <div className="w-16 h-16 rounded-full bg-[#1dd3b0]/10 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-[#1dd3b0]" />
              </div>
              <p className="text-[#94a3b8]">Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Schedule */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Requirements */}
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-8 rounded-2xl border border-[#1dd3b0]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1dd3b0]/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#1dd3b0]" />
                </div>
                <h3 className="text-2xl md:text-3xl text-white">Что потребуется</h3>
              </div>
              <ul className="space-y-4 text-[#94a3b8]">
                <li className="flex items-start gap-3">
                  <span className="text-[#1dd3b0] mt-1 flex-shrink-0">✓</span>
                  <span>Стационарный компьютер или ноутбук с наушниками и микрофоном</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1dd3b0] mt-1 flex-shrink-0">✓</span>
                  <span>Стабильный интернет и Zoom</span>
                </li>
              </ul>
            </div>

            {/* Schedule */}
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-8 rounded-2xl border border-[#a78bfa]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#a78bfa]" />
                </div>
                <h3 className="text-2xl md:text-3xl text-white">Расписание</h3>
              </div>
              <ul className="space-y-4 text-[#94a3b8]">
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1 flex-shrink-0">•</span>
                  <span><span className="text-white">Четверг, 15:00 (МСК)</span> — группа 4–5 класс</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#a78bfa] mt-1 flex-shrink-0">•</span>
                  <span><span className="text-white">Пятница, 15:30 (МСК)</span> — группа 6–8 класс</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <DollarSign className="w-8 h-8 text-[#f59e0b]" />
            <h2 className="text-3xl md:text-4xl text-white">Стоимость</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-8 rounded-2xl border-2 border-[#1dd3b0]/30 hover:border-[#1dd3b0]/50 transition-all">
              <h3 className="text-2xl text-white mb-2">Полный курс</h3>
              <p className="text-[#94a3b8] mb-4">10 уроков</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl text-[#1dd3b0]">12 000</span>
                <span className="text-xl text-[#94a3b8]">руб</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f1e35] to-[#1a2942] p-8 rounded-2xl border-2 border-[#a78bfa]/30 hover:border-[#a78bfa]/50 transition-all">
              <h3 className="text-2xl text-white mb-2">Абонемент</h3>
              <p className="text-[#94a3b8] mb-4">За урок</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl text-[#a78bfa]">1 300</span>
                <span className="text-xl text-[#94a3b8]">руб</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#1dd3b0]/10 to-[#a78bfa]/10 p-8 md:p-12 rounded-3xl border-2 border-[#1dd3b0]/30 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQyIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAgMCBMIDAgMCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjksMjExLDE3NiwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQyKSIvPjwvc3ZnPg==')] opacity-50"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f59e0b]/20 border border-[#f59e0b]/40 rounded-full mb-6">
                <Users className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-[#f59e0b]">Места ограничены!</span>
              </div>

              <h2 className="text-3xl md:text-4xl text-white mb-4">Набор открыт!</h2>
              <p className="text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto">
                Группы маленькие — максимум 6 детей, чтобы каждый получил внимание. Места ограничены!
              </p>

              <p className="text-2xl text-white mb-8">
                👉 Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
              </p>

              <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1dd3b0] to-[#a78bfa] text-[#0a1628] rounded-full text-xl hover:shadow-2xl hover:shadow-[#1dd3b0]/50 transition-all transform hover:scale-105 active:scale-95">
                <span>Записаться на курс</span>
                <Plane className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-[#1dd3b0]/20">
        <div className="max-w-6xl mx-auto text-center text-[#94a3b8]">
          <p>© 2026 Английский для путешествий. Откройте мир вместе с нами!</p>
        </div>
      </footer>
    </div>
  );
}
