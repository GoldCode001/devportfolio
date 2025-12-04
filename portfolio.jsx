import React, { useState, useEffect } from 'react';
import { Github, Mail, Twitter, Linkedin, ExternalLink, Code, Cpu, Database, ChevronRight, Terminal, Zap } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Unhinged Genie",
      description: "AI-powered chatbot with voice synthesis capabilities and payment gateway integration. Built with modern Python stack and deployed at scale.",
      tech: ["Python", "AI/ML", "Voice APIs", "Payment Integration"],
      link: "https://github.com/GoldCode001/DEGENie"
    },
    {
      title: "Prediction Markets Aggregator",
      description: "Real-time financial analytics platform with interactive data visualization. Aggregates data from different prediction markets platforms and display them in goups for people to trade what they want... and also Tracks portfolio performance with live market data integration.",
      tech: ["React", "Data Visualization", "APIs", "Real-time Data","Nextjs"],
      link: "https://github.com/GoldCode001/predicthub"
    },
    {
      title: "Web3 Recovery Tools",
      description: "Open-source cryptographic utilities and recovery applications. Implements BIP39 standards with multiprocessing optimization.",
      tech: ["Python", "Cryptography", "Multiprocessing", "CLI Tools"],
      link: "https://github.com/GoldCode001/seed-phrase-recovery"
    },
    {
      title: "Fuel Ecosystem explorer",
      description: "An explorer for the Fuel ecosystem.",
      tech: ["APIs", "Nodejs", "Typescript", "js"],
      link: "https://github.com/GoldCode001/fuelatlas"
    }
  ];

  const skills = [
    { category: "Languages & Frameworks", items: ["Python", "JavaScript/React", "Bash/Shell", "Node.js", "HTML/CSS"] },
    { category: "Web3 & Blockchain", items: ["Smart Contracts", "Cryptography", "Web3.js/Ethers.js", "Blockchain Security", "DeFi Protocols"] },
    { category: "Tools & Technologies", items: ["Git/GitHub", "Linux/Unix", "API Development", "Database Design", "Cloud Platforms"] },
    { category: "Specializations", items: ["AI/ML Integration", "Video Production (CapCut)", "Technical Content Creation", "System Architecture"] }
  ];

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "End-to-end application development from concept to deployment. Specializing in Python backends and React frontends with clean, maintainable code.",
      pricing: "Project-based"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Web3 Solutions",
      description: "Blockchain integration, smart contract development, and cryptocurrency tools. Building secure, efficient applications for the decentralized web.",
      pricing: "Hourly or Fixed"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Technical Consulting",
      description: "Architecture design, code review, and system optimization. Expert guidance on scaling applications and solving complex technical challenges.",
      pricing: "Consultation"
    }
  ];

  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#f5f5f5',
      minHeight: '100vh',
      fontFamily: '"SF Mono", "Fira Code", "Roboto Mono", monospace'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(245, 245, 245, 0.1)',
        padding: '1.5rem 2rem',
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            letterSpacing: '2px',
            background: 'linear-gradient(135deg, #f5f5f5 0%, #888 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase'
          }}>
            GOLDMAN
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {['About', 'Projects', 'Skills', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveSection(item.toLowerCase())}
                style={{
                  color: activeSection === item.toLowerCase() ? '#f5f5f5' : '#888',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.color = '#f5f5f5'}
                onMouseLeave={(e) => e.target.style.color = activeSection === item.toLowerCase() ? '#f5f5f5' : '#888'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem'
      }}>
        {/* Animated background grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(245, 245, 245, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 245, 245, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.3,
          animation: 'gridMove 20s linear infinite'
        }} />
        
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1s ease',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem',
              opacity: isVisible ? 1 : 0,
              animation: 'fadeInUp 1s ease 0.2s forwards'
            }}>
              <Terminal className="w-5 h-5" style={{ color: '#888' }} />
              <span style={{
                color: '#888',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                Full-Stack Developer
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: '900',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, #f5f5f5 0%, #888 50%, #f5f5f5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
              letterSpacing: '4px',
              opacity: isVisible ? 1 : 0,
              animation: 'fadeInUp 1s ease 0.4s forwards'
            }}>
              GOLDMAN
            </h1>

            <p style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              color: '#bbb',
              maxWidth: '800px',
              lineHeight: '1.6',
              marginBottom: '3rem',
              opacity: isVisible ? 1 : 0,
              animation: 'fadeInUp 1s ease 0.6s forwards'
            }}>
              6+ years building software that matters. From web applications to blockchain tools, 
              AI integrations to automation systems. I turn complex problems into elegant solutions.
            </p>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              opacity: isVisible ? 1 : 0,
              animation: 'fadeInUp 1s ease 0.8s forwards'
            }}>
              <a
                href="#projects"
                style={{
                  padding: '1rem 2.5rem',
                  backgroundColor: '#f5f5f5',
                  color: '#0a0a0a',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fff';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(245, 245, 245, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f5f5f5';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                style={{
                  padding: '1rem 2.5rem',
                  backgroundColor: 'transparent',
                  color: '#f5f5f5',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  border: '2px solid #f5f5f5',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f5f5f5';
                  e.target.style.color = '#0a0a0a';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#f5f5f5';
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Brand Image */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            animation: 'fadeInUp 1s ease 0.4s forwards',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '350px',
              height: '480px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '2px solid rgba(245, 245, 245, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.borderColor = 'rgba(245, 245, 245, 0.4)';
              e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.borderColor = 'rgba(245, 245, 245, 0.2)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
            }}>
              <img 
                src="/images/pitchblack.jpg" 
                alt="Goldman"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (max-width: 968px) {
            section > div[style*="gridTemplateColumns"] {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '8rem 2rem',
        backgroundColor: '#0f0f0f',
        borderTop: '1px solid rgba(245, 245, 245, 0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '3rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: '#f5f5f5'
          }}>
            About
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#f5f5f5',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                The Developer
              </h3>
              <p style={{
                color: '#bbb',
                lineHeight: '1.8',
                fontSize: '1.1rem'
              }}>
                6+ years of hands-on development experience across multiple domains. From building 
                full-stack web applications to diving deep into blockchain technology, I've consistently 
                delivered robust, scalable solutions. My code is clean, my approach is pragmatic.
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#f5f5f5',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
              The Educator
              </h3>
              <p style={{
                color: '#bbb',
                lineHeight: '1.8',
                fontSize: '1.1rem'
              }}>
                Behind the Pitch Black brand, I break down complex technical concepts into digestible 
                content. Whether it's explaining blockchain fundamentals or demystifying AI, I keep it 
                real, jargon-free, and straight to the point. Currently expanding into video format.
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#f5f5f5',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                The Builder
              </h3>
              <p style={{
                color: '#bbb',
                lineHeight: '1.8',
                fontSize: '1.1rem'
              }}>
                Currently studying at Near East University while planning next steps in Scotland for 
                software engineering. But learning never stops at the classroom - I'm constantly 
                experimenting, building side projects, and pushing boundaries in web3 and AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '8rem 2rem',
        backgroundColor: '#0a0a0a'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '3rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: '#f5f5f5'
          }}>
            Projects
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#0f0f0f',
                  border: '1px solid rgba(245, 245, 245, 0.1)',
                  padding: '2.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(245, 245, 245, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(245, 245, 245, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: '#f5f5f5',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: '#bbb',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: '1rem'
                }}>
                  {project.description}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: 'rgba(245, 245, 245, 0.05)',
                        border: '1px solid rgba(245, 245, 245, 0.2)',
                        color: '#f5f5f5',
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontWeight: '600'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  style={{
                    color: '#f5f5f5',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.gap = '1rem'}
                  onMouseLeave={(e) => e.target.style.gap = '0.5rem'}
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '8rem 2rem',
        backgroundColor: '#0f0f0f',
        borderTop: '1px solid rgba(245, 245, 245, 0.1)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '3rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: '#f5f5f5'
          }}>
            Skills
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem'
          }}>
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: '#f5f5f5',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  borderBottom: '2px solid rgba(245, 245, 245, 0.2)',
                  paddingBottom: '0.75rem'
                }}>
                  {skillGroup.category}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      style={{
                        color: '#bbb',
                        marginBottom: '0.75rem',
                        paddingLeft: '1.5rem',
                        position: 'relative',
                        fontSize: '1rem',
                        lineHeight: '1.6'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#f5f5f5'
                      }}>
                        →
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '8rem 2rem',
        backgroundColor: '#0a0a0a'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '3rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: '#f5f5f5'
          }}>
            Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#0f0f0f',
                  border: '1px solid rgba(245, 245, 245, 0.1)',
                  padding: '3rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(245, 245, 245, 0.3)';
                  e.currentTarget.style.backgroundColor = '#111';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(245, 245, 245, 0.1)';
                  e.currentTarget.style.backgroundColor = '#0f0f0f';
                }}
              >
                <div style={{
                  marginBottom: '1.5rem',
                  color: '#f5f5f5',
                  backgroundColor: 'rgba(245, 245, 245, 0.05)',
                  width: 'fit-content',
                  padding: '1rem',
                  border: '1px solid rgba(245, 245, 245, 0.2)'
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: '#f5f5f5',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#bbb',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: '1rem'
                }}>
                  {service.description}
                </p>
                <div style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'rgba(245, 245, 245, 0.05)',
                  border: '1px solid rgba(245, 245, 245, 0.2)',
                  color: '#f5f5f5',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'inline-block'
                }}>
                  {service.pricing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '8rem 2rem',
        backgroundColor: '#0f0f0f',
        borderTop: '1px solid rgba(245, 245, 245, 0.1)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: '#f5f5f5'
          }}>
            Get in Touch
          </h2>
          <p style={{
            color: '#bbb',
            fontSize: '1.2rem',
            lineHeight: '1.8',
            marginBottom: '3rem'
          }}>
            Need recovery services? Want to collaborate on a project? Let's talk.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            {[
              { icon: <Github className="w-6 h-6" />, label: 'GitHub', link: 'https://github.com/GoldCode001' },
              { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', link: 'https://x.com/goldmancreates' },
              { icon: <Mail className="w-6 h-6" />, label: 'Email', link: 'goldmanfx.001@gmail.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  backgroundColor: 'rgba(245, 245, 245, 0.05)',
                  border: '1px solid rgba(245, 245, 245, 0.2)',
                  color: '#f5f5f5',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(245, 245, 245, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(245, 245, 245, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(245, 245, 245, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(245, 245, 245, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid rgba(245, 245, 245, 0.1)',
        textAlign: 'center'
      }}>
        <p style={{
          color: '#888',
          fontSize: '0.9rem',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          © 2024 Goldman · Full-Stack Developer
        </p>
      </footer>
    </div>
  );
}