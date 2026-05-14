import React from 'react';
import { motion } from 'framer-motion';

const FullTashjirApp = () => {
  const styles = {
    container: {
      direction: 'rtl',
      minHeight: '100vh',
      backgroundColor: '#f1f5f9',
      padding: '40px 20px',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      color: '#1e293b'
    },
    titleSection: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    mainTree: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px'
    },
    rootNode: {
      background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
      color: 'white',
      padding: '25px 50px',
      borderRadius: '20px',
      fontSize: '2rem',
      fontWeight: 'bold',
      boxShadow: '0 10px 25px rgba(30, 64, 175, 0.3)',
      border: '4px solid #fff'
    },
    branchContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
      width: '100%',
      maxWidth: '1400px'
    },
    card: (borderColor) => ({
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '25px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      borderTop: `8px solid ${borderColor}`,
      height: '100%'
    }),
    subHeading: {
      color: '#1e40af',
      fontSize: '1.4rem',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '10px',
      marginBottom: '15px'
    },
    leafList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    leafItem: {
      padding: '12px',
      margin: '8px 0',
      backgroundColor: '#f8fafc',
      borderRadius: '10px',
      borderRight: '4px solid #cbd5e1',
      fontSize: '1rem',
      lineHeight: '1.6'
    },
    definition: {
      fontSize: '0.85rem',
      color: '#64748b',
      display: 'block',
      marginTop: '4px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleSection}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', color: '#0f172a' }}
        >
          خارطة علم أصول الفقه
        </motion.h1>
        <p style={{ color: '#475569', fontSize: '1.2rem' }}>
          التشجير الكامل للمباحث الأصولية على المذهب الشافعي
        </p>
      </div>

      <div style={styles.mainTree}>
        {/* The Source Node */}
        <motion.div 
          initial={{ scale: 0.8 }} 
          animate={{ scale: 1 }}
          style={styles.rootNode}
        >
          أصول الفقه
        </motion.div>

        <div style={styles.branchContainer}>
          
          {/* 1. SECTION: AL-AHKAM */}
          <motion.div whileHover={{ y: -5 }} style={styles.card('#3b82f6')}>
            <h2 style={styles.subHeading}>أولاً: مباحث الأحكام</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <strong style={{ color: '#2563eb' }}>1. الأحكام التكليفية</strong>
              <ul style={styles.leafList}>
                <li style={styles.leafItem}>إيجاب <span style={styles.definition}>طلب الفعل طلباً جازماً</span></li>
                <li style={styles.leafItem}>ندب <span style={styles.definition}>طلب الفعل طلباً غير جازم</span></li>
                <li style={styles.leafItem}>تحريم <span style={styles.definition}>طلب الترك طلباً جازماً</span></li>
                <li style={styles.leafItem}>كراهة <span style={styles.definition}>طلب الترك طلباً غير جازم</span></li>
                <li style={styles.leafItem}>إباحة <span style={styles.definition}>التخيير بين الفعل والترك</span></li>
              </ul>
            </div>

            <div>
              <strong style={{ color: '#2563eb' }}>2. الأحكام الوضعية</strong>
              <ul style={styles.leafList}>
                <li style={styles.leafItem}>السبب والشرط والمانع</li>
                <li style={styles.leafItem}>الصحة والفساد</li>
                <li style={styles.leafItem}>العزيمة والرخصة</li>
              </ul>
            </div>
          </motion.div>

          {/* 2. SECTION: AL-ADILLAH */}
          <motion.div whileHover={{ y: -5 }} style={styles.card('#10b981')}>
            <h2 style={styles.subHeading}>ثانياً: مباحث الأدلة</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <strong style={{ color: '#059669' }}>1. الأدلة المتفق عليها</strong>
              <ul style={styles.leafList}>
                <li style={styles.leafItem}>الكتاب <span style={styles.definition}>كلام الله المعجز المنزل على النبي</span></li>
                <li style={styles.leafItem}>السنة <span style={styles.definition}>قول النبي ﷺ أو فعله أو تقريره</span></li>
                <li style={styles.leafItem}>الإجماع <span style={styles.definition}>اتفاق مجتهدي الأمة في عصر ما</span></li>
                <li style={styles.leafItem}>القياس <span style={styles.definition}>إلحاق فرع بأصل في حكم لعلة جامعة</span></li>
              </ul>
            </div>

            <div>
              <strong style={{ color: '#059669' }}>2. الأدلة المختلف فيها</strong>
              <ul style={styles.leafList}>
                <li style={styles.leafItem}>الاستصحاب</li>
                <li style={styles.leafItem}>شرع من قبلنا</li>
                <li style={styles.leafItem}>قول الصحابي</li>
                <li style={styles.leafItem}>المصالح المرسلة</li>
              </ul>
            </div>
          </motion.div>

          {/* 3. SECTION: DILALAT & IJTIHAD */}
          <motion.div whileHover={{ y: -5 }} style={styles.card('#f59e0b')}>
            <h2 style={styles.subHeading}>ثالثاً: الاستنباط والاجتهاد</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <strong style={{ color: '#d97706' }}>طرق الاستنباط</strong>
              <ul style={styles.leafList}>
                <li style={styles.leafItem}>الأمر والنهي</li>
                <li style={styles.leafItem}>العام والخاص</li>
                <li style={styles.leafItem}>المطلق والمقيد</li>
                <li style={styles.leafItem}>المنطوق والمفهوم</li>
              </ul>
            </div>

            <div>
              <strong style={{ color: '#d97706' }}>الاجتهاد والتقليد</strong>
              <ul style={styles.leafList}>
                <li style={styles.leafItem}>شروط المجتهد والفتوى</li>
                <li style={styles.leafItem}>التعارض والترجيح</li>
                <li style={styles.leafItem}>التقليد والاتباع</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '60px', color: '#94a3b8' }}>
        تم استخلاص البيانات بناءً على شرح الشيخ لبيب نجيب - حفظه الله
      </footer>
    </div>
  );
};

export default FullTashjirApp;