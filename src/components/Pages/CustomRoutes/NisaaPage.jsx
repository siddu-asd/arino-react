import React from 'react';
import Div from '../../Div';
import Spacing from '../../Spacing';

export default function NisaaPage() {
  return (
    <>
             <div className="coming-soon-container" style={{
         minHeight: '100vh',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #8B0000 100%)',
         position: 'relative',
         overflow: 'hidden'
       }}>
        {/* Animated background elements */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        
        <Div className="container text-center">
          <div className="coming-soon-content">
                         <h1 className="coming-soon-title" style={{
               fontSize: '4rem',
               fontWeight: '700',
               color: '#FF0000',
               marginBottom: '1rem',
               textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 0 20px rgba(255,0,0,0.5)',
               animation: 'fadeInUp 1s ease-out'
             }}>
               NISAA
             </h1>
            
                         <div className="coming-soon-subtitle" style={{
               fontSize: '2rem',
               color: '#FF4444',
               marginBottom: '2rem',
               opacity: '0.9',
               animation: 'fadeInUp 1s ease-out 0.3s both'
             }}>
               Coming Soon
             </div>
            
                         <div className="coming-soon-description" style={{
               fontSize: '1.2rem',
               color: '#CCCCCC',
               opacity: '0.9',
               maxWidth: '600px',
               margin: '0 auto 3rem',
               lineHeight: '1.6',
               animation: 'fadeInUp 1s ease-out 0.6s both'
             }}>
               We're working on something amazing. Stay tuned for the future of digital solutions.
             </div>
            
            <div className="loading-dots" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '2rem',
              animation: 'fadeInUp 1s ease-out 0.9s both'
            }}>
                             <div className="dot" style={{
                 width: '12px',
                 height: '12px',
                 borderRadius: '50%',
                 backgroundColor: '#FF0000',
                 animation: 'bounce 1.4s ease-in-out infinite both'
               }}></div>
               <div className="dot" style={{
                 width: '12px',
                 height: '12px',
                 borderRadius: '50%',
                 backgroundColor: '#FF0000',
                 animation: 'bounce 1.4s ease-in-out infinite both 0.2s'
               }}></div>
               <div className="dot" style={{
                 width: '12px',
                 height: '12px',
                 borderRadius: '50%',
                 backgroundColor: '#FF0000',
                 animation: 'bounce 1.4s ease-in-out infinite both 0.4s'
               }}></div>
            </div>
            
                         <div className="progress-bar" style={{
               width: '300px',
               height: '4px',
               backgroundColor: 'rgba(255,255,255,0.1)',
               borderRadius: '2px',
               margin: '0 auto',
               overflow: 'hidden',
               animation: 'fadeInUp 1s ease-out 1.2s both'
             }}>
               <div className="progress-fill" style={{
                 height: '100%',
                 backgroundColor: '#FF0000',
                 borderRadius: '2px',
                 animation: 'progress 3s ease-in-out infinite'
               }}></div>
             </div>
          </div>
        </Div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
        
        @keyframes progress {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
        
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
                 .shape {
           position: absolute;
           background: rgba(255,0,0,0.15);
           border-radius: 50%;
           animation: float 6s ease-in-out infinite;
         }
        
        .shape-1 {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .shape-2 {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 10%;
          animation-delay: 1s;
        }
        
        .shape-3 {
          width: 60px;
          height: 60px;
          top: 80%;
          left: 20%;
          animation-delay: 2s;
        }
        
        .shape-4 {
          width: 100px;
          height: 100px;
          top: 10%;
          right: 30%;
          animation-delay: 3s;
        }
        
        .shape-5 {
          width: 40px;
          height: 40px;
          top: 40%;
          left: 60%;
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .coming-soon-content {
          position: relative;
          z-index: 2;
        }
        
        @media (max-width: 768px) {
          .coming-soon-title {
            font-size: 2.5rem !important;
          }
          .coming-soon-subtitle {
            font-size: 1.5rem !important;
          }
          .coming-soon-description {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </>
  );
}
