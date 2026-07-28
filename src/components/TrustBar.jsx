import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Users, CheckCircle2, Languages } from 'lucide-react';

export const TrustBar = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: <Award size={28} className="text-saffron" />,
      title: t('trust_years'),
      desc: t('trust_years_desc')
    },
    {
      icon: <CheckCircle2 size={28} className="text-saffron" />,
      title: t('trust_rituals'),
      desc: t('trust_rituals_desc')
    },
    {
      icon: <Users size={28} className="text-saffron" />,
      title: t('trust_families'),
      desc: t('trust_families_desc')
    },
    {
      icon: <Languages size={28} className="text-saffron" />,
      title: t('trust_languages'),
      desc: t('trust_languages_desc')
    }
  ];

  return (
    <section style={{
      backgroundColor: 'var(--bg-pure-white)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '2rem 0',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          {metrics.map((m, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-warm-cream)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{
                color: 'var(--primary-saffron)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-saffron-light)',
                flexShrink: 0
              }}>
                {m.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--secondary-maroon)',
                  lineHeight: 1.1
                }}>
                  {m.title}
                </div>
                <div style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-medium-gray)',
                  fontWeight: 500,
                  marginTop: '0.2rem'
                }}>
                  {m.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
