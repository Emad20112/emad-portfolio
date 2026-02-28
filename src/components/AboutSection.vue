<template>
  <section id="about">
    <div class="section-sub">نبذة عني</div>
    <h2 class="section-title">من أنا</h2>

    <p class="about-text">
      مهندس برمجيات بخبرة عملية 5+ سنوات في بناء وتوجيه تطوير أنظمة ويب وموبايل قابلة للتوسع
      (ERP، أنظمة مدارس، منصات تجارة إلكترونية، تطبيقات مالية). أُجيد تصميم هندسات أنظمة موثوقة
      بأداء مرتفع وتمكين فرق صغيرة لتسليم منتجات Production-grade. أركز على تحويل متطلبات الأعمال
      إلى حلول تقنية توفر وقت التشغيل، تقلل الأخطاء، وتحسّن تجربة المستخدم.
    </p>

    <h3 class="about-subtitle">نقاط القوة الأساسية</h3>
    <ul class="strengths-list">
      <li>تصميم معماريات نظم قابلة للتوسع (Scalable System Architecture)</li>
      <li>قيادة فِرق تطوير وتطبيق منهجيات Agile/Scrum</li>
      <li>تحسين أداء قواعد البيانات ونظم الكاش</li>
      <li>بناء واجهات مستخدم وتجربة مستخدم محسّنة (UI/UX)</li>
      <li>ضمان جودة البرنامج: مراجعة كود، اختبارات، وسياسات أمان</li>
    </ul>

    <h3 class="about-subtitle">الخبرة العملية</h3>
    <div class="experience-card">
      <div class="exp-header">
        <strong>المشرف التقني — إنما سوفت (Inma Soft)</strong>
        <span class="exp-meta">إب، اليمن · 2019 – الآن</span>
      </div>
      <ul class="exp-list">
        <li>قيادة وتطوير 20+ نظام وتطبيق (ويب + موبايل) لجهات تعليمية وتجارية</li>
        <li>مشرف فريق تطوير (5 مطورين) بتطبيق منهجيات Agile/Scrum</li>
        <li>تصميم أنظمة وقواعد بيانات تضمن استقراراً وأداءً عالياً لآلاف المستخدمين</li>
        <li>تحسين الأداء عبر تحسين الاستعلامات، إضافة كاش، وإعادة هيكلة الطبقات المنطقية</li>
        <li>إدارة علاقات مع أكثر من 11 عميل وتحويل متطلباتهم إلى مواصفات فنية</li>
      </ul>
    </div>

    <h3 class="about-subtitle">الإنجازات</h3>
    <div class="achievements">
      <div class="achievement-item">
        <span class="achievement-number">20+</span>
        <span class="achievement-label">مشروع Production</span>
      </div>
      <div class="achievement-item">
        <span class="achievement-number">5+</span>
        <span class="achievement-label">سنوات خبرة</span>
      </div>
      <div class="achievement-item">
        <span class="achievement-number">11+</span>
        <span class="achievement-label">عميل</span>
      </div>
      <div class="achievement-item">
        <span class="achievement-number">5</span>
        <span class="achievement-label">أعضاء فريق</span>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-text {
  color: var(--text-muted);
  font-size: 14px;
  max-width: 750px;
  line-height: 1.8;
  margin-bottom: 24px;
}

.about-subtitle {
  color: var(--text-main);
  font-size: 16px;
  font-weight: 700;
  margin-top: 28px;
  margin-bottom: 12px;
  padding-right: 12px;
  border-right: 3px solid var(--primary);
}

.strengths-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 750px;
}

.strengths-list li {
  background: var(--card-bg, rgba(255, 255, 255, 0.04));
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 13px;
  color: var(--text-muted);
  transition: all 0.3s ease;
}

.strengths-list li:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-2px);
}

.experience-card {
  background: var(--card-bg, rgba(255, 255, 255, 0.04));
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px 24px;
  max-width: 750px;
  margin-bottom: 8px;
}

.exp-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 14px;
  color: var(--text-main);
}

.exp-meta {
  font-size: 12px;
  color: var(--primary);
  background: rgba(99, 102, 241, 0.1);
  padding: 4px 10px;
  border-radius: 20px;
}

.exp-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.exp-list li {
  position: relative;
  padding-right: 16px;
  margin-bottom: 8px;
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.7;
}

.exp-list li::before {
  content: '▸';
  position: absolute;
  right: 0;
  color: var(--primary);
}

.achievements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  max-width: 750px;
  margin-top: 12px;
}

.achievement-item {
  background: var(--card-bg, rgba(255, 255, 255, 0.04));
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.achievement-item:hover {
  border-color: var(--primary);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);
}

.achievement-number {
  display: block;
  font-size: 28px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 4px;
}

.achievement-label {
  font-size: 12px;
  color: var(--text-muted);
}
</style>

