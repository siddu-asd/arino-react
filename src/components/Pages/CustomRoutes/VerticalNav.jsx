import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import '../styles/VerticalNav.css';

const VerticalNav = ({ onNavigate, currentScene, scenes, portalContainer }) => {
  // Inject CSS styles directly for modal and nav
  useEffect(() => {
    if (!document.getElementById('vertical-nav-styles')) {
      const style = document.createElement('style');
      style.id = 'vertical-nav-styles';
      style.innerHTML = `
      .nav-container { position: fixed; top: 0; right: -220px; width: 220px; height: 100vh; font-weight: bold; transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1); z-index: 100000; display: none; }
      .nav-container.open { right: 0; display: block; }
      .nav-content { position: relative; width: 100%; max-width: 270px; margin: 0 auto; height: 100%; padding: 15px; background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(8px); border-left: 1px solid rgba(255, 255, 255, 0.1); display: flex; flex-direction: column; align-items: center; }
      :fullscreen .main-button, :-webkit-full-screen .main-button, :-moz-full-screen .main-button, :-ms-fullscreen .main-button { position: fixed !important; z-index: 100000 !important; }
      .main-button { position: fixed; right: 30px; top: 30px; background: linear-gradient(270deg, #cbbcf0, #9b85d1, #ffffff, #BFA6FF); background-size: 400% 400%; animation: gradientMove 6s ease-in-out infinite; box-shadow: 0 0 16px 4px rgba(157, 133, 211, 0.18), 0 2px 8px rgb(255, 255, 255), 0 0 32px 8px #bfa6ff66; border: 3.5px solid rgba(255, 255, 255, 0.2); padding: 12px 24px; border-radius: 30px; cursor: pointer; font-size: 16px; font-weight: bold; color: rgb(2, 2, 2); letter-spacing: 1px; text-transform: uppercase; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); white-space: nowrap; opacity: 1; z-index: 100000; display: flex; align-items: center; gap: 8px; }
      @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      @keyframes floatY { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      .main-button .explore-btn-icon { display: flex; align-items: center; justify-content: center; font-size: 1.2em; margin-right: 6px; filter: drop-shadow(0 1px 2px rgba(107,70,193,0.10)); height: 22px; transition: transform 0.3s cubic-bezier(0.4,0,0.2,1); }
      .main-button:hover .explore-btn-icon { transform: scale(1.18) rotate(-12deg); }
      .main-button::after { content: ''; position: absolute; left: 50%; top: 50%; width: 120%; height: 120%; background: radial-gradient(circle, #bfa6ff55 0%, transparent 70%); transform: translate(-50%, -50%); z-index: -1; filter: blur(8px); opacity: 0.7; pointer-events: none; animation: glowPulse 2.2s infinite alternate; }
      @keyframes glowPulse { 0% { opacity: 0.7; filter: blur(8px); } 100% { opacity: 1; filter: blur(16px); } }
      .main-button:hover { transform: translateY(-2px); font-weight: bold; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); }
      .main-button.exit { background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.3); color: #ff6b6b; font-weight: bold; }
      .main-button.exit:hover { font-weight: bold; background: rgba(239, 68, 68, 0.3); }
      .main-button.hidden { display: none !important; }
      .main-button.explore-bottom-btn { display: flex; align-items: center; justify-content: center; gap: 10px; background: linear-gradient(90deg, #6B46C1 0%, #BFA6FF 100%); color: #fff; font-size: 1.18em; font-weight: 700; border-radius: 32px; padding: 18px 44px; box-shadow: 0 6px 24px rgba(107,70,193,0.18), 0 2px 8px rgba(0,0,0,0.10); border: 2px solid #bfa6ff; margin: 24px auto 0 auto; transition: background 0.18s, box-shadow 0.18s, transform 0.14s, border 0.18s; letter-spacing: 1.3px; text-transform: uppercase; font-family: 'Inter', 'Segoe UI', Arial, sans-serif; cursor: pointer; position: relative; }
      .main-button.explore-bottom-btn:hover { background: linear-gradient(90deg, #BFA6FF 0%, #6B46C1 100%); box-shadow: 0 12px 36px 0 rgba(117, 86, 190, 0.22), 0 4px 16px rgba(0,0,0,0.13); transform: translateY(-2px) scale(1.04); border-color: #130338; }
      .explore-btn-icon { display: flex; align-items: center; justify-content: center; font-size: 1.2em; margin-right: 6px; filter: drop-shadow(0 1px 2px rgba(107,70,193,0.10)); height: 22px; }
      .nav-modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; width: 100vw; height: 100vh; background: transparent; z-index: 200000; display: flex; align-items: center; justify-content: flex-end; pointer-events: none; overflow-x: hidden; }
      .nav-modal-blur-bg { position: relative; margin-right: 0; pointer-events: auto;  box-shadow: 0 12px 48px 0 rgba(107,70,193,0.18), 0 2px 8px rgba(0,0,0,0.10); background: rgba(255, 255, 255, 0.1) !important; backdrop-filter: blur(12px) saturate(120%); padding: 0; display: flex; align-items: center; justify-content: center; overflow-x: hidden; }
      .nav-modal { width: 420px; max-width: 90vw; height: 100vh; min-height: 100vh; background: rgba(255, 255, 255, 0.1) !important; box-shadow: 0 12px 48px 0 rgba(35,41,70,0.10), 0 2px 8px rgba(30,41,59,0.08); padding: 64px 48px 32px 40px; position: relative; display: flex; flex-direction: column; align-items: center; animation: scaleInModal 0.5s cubic-bezier(0.4,0,0.2,1); overflow-y: auto; overflow-x: hidden; backdrop-filter: blur(10px) saturate(140%); color: #f1f3fa; }
      @keyframes scaleInModal { from { opacity: 0; transform: scale(0.85); } to { opacity: 1; transform: scale(1); } }
      .modal-close-btn { position: absolute; top: 16px; right: 16px; width: 32px; height: 32px; border-radius: 90%; background: #fff; border: none; box-shadow: 0 2px 8px rgba(35,41,70,0.10); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.18s, box-shadow 0.18s, transform 0.14s, color 0.18s; z-index: 9999; color: #6B46C1; font-size: 1em; pointer-events: auto; margin-top: 6px; }
      .modal-close-btn svg { width: 18px; height: 18px; }
      .modal-close-btn:hover { background: #bfa6ff; color: #232946; box-shadow: 0 6px 18px rgba(35,41,70,0.18); transform: scale(1.08); }
      .nav-modal-grid { width: 100%; display: flex; flex-direction: column; gap: 24px; align-items: center; justify-content: flex-start; margin-top: 32px; }
      .nav-modal-card { border-radius: 16px; box-shadow: 0 4px 24px rgba(35,41,70,0.08); display: flex; flex-direction: column; align-items: center; padding: 0 0 18px 0; width: 100%; max-width: 220px; transition: box-shadow 0.18s, transform 0.18s; position: relative; overflow: hidden; animation: fadeInCard 0.6s cubic-bezier(0.4,0,0.2,1); color: #232946; background: rgba(255,255,255,0.55); border: 2px solid #e5e7eb; padding: 12px 0 16px 0; width: 90%; max-width: 320px; margin: 0 auto; }
      @keyframes fadeInCard { from { opacity: 0; transform: translateY(24px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
      .nav-modal-card:hover { border: 4px solid #bfa6ff; box-shadow: 0 0 0 3px #bfa6ff, 0 12px 40px rgba(35,41,70,0.16); transform: translateY(-4px) scale(1.04); }
      .nav-modal-img-wrap { width: 100%; height: 150px; background: #F3F4F6; border-radius: 16px 16px 0 0; overflow: hidden; box-shadow: 0 2px 12px rgba(35,41,70,0.08); display: flex; align-items: center; justify-content: center; margin-bottom: 0; box-sizing: border-box; }
      .nav-modal-img-wrap img { width: 100%; height: 100%; object-fit: cover; border-radius: 16px 16px 0 0; transition: transform 0.3s; }
      .nav-modal-card:hover .nav-modal-img-wrap img { transform: scale(1.06) rotate(-2deg); }
      .nav-modal-btn { width: 90%; max-width: 320px; height: 48px; margin: 0 auto; background: #fff; color: #232946; font-size: 1.08em; font-weight: 600; border-radius: 16px; text-align: center; letter-spacing: 0.5px; font-family: 'Inter', 'Segoe UI', Arial, sans-serif; box-shadow: 0 2px 8px rgba(35,41,70,0.10); cursor: pointer; border: none; outline: none; transition: background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.14s; display: flex; align-items: center; justify-content: center; }
      .nav-modal-btn:hover, .nav-modal-btn.active { background: #b4b5e4; color: #232946; box-shadow: 0 6px 18px rgba(35,41,70,0.18); transform: scale(1.04); }
      .nav-modal-marker-label { margin-top: 8px; font-size: 1em; font-weight: 700; color: #232323; text-align: center; letter-spacing: 0.5px; }
      .nav-modal-btn.back-btn { margin-top: 48px !important; }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedScene, setSelectedScene] = useState(null); // Track selected scene for detail view
  const [modalVisible, setModalVisible] = useState(false); // For animation

  useEffect(() => {
    document.body.classList.toggle('nav-open', isMenuOpen);
    if (isMenuOpen) {
      // Delay to allow animation class to apply
      setTimeout(() => setModalVisible(true), 10);
    } else {
      setModalVisible(false);
    }
  }, [isMenuOpen]);

  const navigationItems = [
    { id: 'entry', label: 'Main Entry', scene: 'ENTRY' },
    { id: 'room1', label: 'Office Room', scene: 'ROOM1' },
    { id: 'admin', label: 'Admin Block', scene: 'ADMIN-BLOCK' },
    { id: 'workspace', label: 'Work Space', scene: 'WORKSPACE' },
    { id: 'new-office', label: 'New Office', scene: 'NEW-OFFICE' },
    { id: 'new-office-inside', label: 'New Office Interior', scene: 'NEW-OFFICE-INSIDE' },
    { id: 'studio-outside', label: 'Studio Entrance', scene: 'STUDIO-OUTSIDE' },
    { id: 'studio', label: 'Studio', scene: 'STUDIO' },
  ];

  const handleClick = (item) => {
    setSelectedScene(item.scene); // Show detail view for this scene
  };

  const handleBack = () => {
    setSelectedScene(null); // Return to main navigation list
  };

  const handleSceneNavigate = (scene) => {
    if (typeof onNavigate === 'function') {
      onNavigate(scene);
    }
    setIsMenuOpen(false);
    setSelectedScene(null);
  };

  // Modal content: either nav list (text only) or scene images/markers
  let modalContent;
  if (selectedScene) {
    // Show all markers/images for the selected scene
    const sceneData = scenes[selectedScene];
    console.log('Selected scene:', selectedScene, 'Scene data:', sceneData);
    if (sceneData?.markers?.length > 0) {
      modalContent = (
        <div style={{ width: '100%' }}>
           <button className="nav-modal-btn back-btn" style={{ marginBottom: 16 }} onClick={handleBack}>Back</button>
          <div className="nav-modal-grid">
            {sceneData.markers.map((marker, idx) => (
              <div
                key={marker.id}
                className="nav-modal-card fadeInCard"
                style={{ cursor: 'pointer', animationDelay: `${idx * 60}ms` }}
                onClick={() => handleSceneNavigate(marker.target)}
              >
                <div className="nav-modal-img-wrap">
                  {marker.image && <img src={marker.image.replace('./', '/')} alt={marker.tooltip} />}
                </div>
                <div className="nav-modal-marker-label">{marker.tooltip}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      console.log('No markers for selected scene:', selectedScene, sceneData);
      modalContent = (
        <div style={{ width: '100%', textAlign: 'center', padding: '32px 0', color: '#232946', fontWeight: 600 }}>
          <button className="nav-modal-btn back-btn" style={{ marginBottom: 16 }} onClick={handleBack}>Back</button>
          <div>No navigation options available for this scene.</div>
        </div>
      );
    }
  } else {
    // Show nav item buttons only
    if (navigationItems.length > 0) {
      modalContent = (
        <div className="nav-modal-grid">
          {navigationItems.map((item, idx) => (
            <button
              key={item.id}
              className="nav-modal-btn fadeInCard"
              style={{ animationDelay: `${idx * 60}ms` }}
              onClick={() => handleClick(item)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      );
    } else {
      console.log('No navigation items available');
      modalContent = (
        <div style={{ width: '100%', textAlign: 'center', padding: '32px 0', color: '#232946', fontWeight: 600 }}>
          No navigation options available.
        </div>
      );
    }
  }

  // Always render the nav menu modal, not just via portal, so it always appears
  const navMenu = isMenuOpen ? (
    <div className="nav-modal-overlay">
      <div className="nav-modal-blur-bg">
        <div className={`nav-modal animated-fade-in${modalVisible ? ' show' : ''}`}> {/* Animation class */}
          <button
            className="modal-close-btn"
            onClick={() => { setIsMenuOpen(false); setSelectedScene(null); }}
            aria-label="Close navigation"
            type="button"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          {modalContent}
        </div>
      </div>
    </div>
  ) : null;

  // When opening the menu, show the nav items list by default
  const openMenu = () => {
    setIsMenuOpen(true);
    setSelectedScene(null); // Show nav items first
  };

  // Always render the Explore button, not via portal
  const exploreButton = !isMenuOpen ? (
    <button
      className="main-button"
      style={{position: 'fixed', top: 30, right: 30, zIndex: 100000, background: 'linear-gradient(270deg, #cbbcf0, #9b85d1, #ffffff, #BFA6FF)', backgroundSize: '400% 400%', boxShadow: '0 0 16px 4px rgba(157, 133, 211, 0.18), 0 2px 8px rgb(255, 255, 255), 0 0 32px 8px #bfa6ff66', border: '3.5px solid rgba(255, 255, 255, 0.2)', padding: '12px 24px', borderRadius: '30px', fontSize: '16px', fontWeight: 'bold', color: 'rgb(2, 2, 2)', letterSpacing: '1px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px'}}
      onClick={(e) => {
        e.stopPropagation();
        openMenu();
      }}
      aria-label="Open navigation"
      aria-expanded={isMenuOpen}
      type="button"
    >
      <span className="explore-btn-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </span>
      Explore
    </button>
  ) : null;

  return (
    <>
      {exploreButton}
      {navMenu}
    </>
  );
};

export default VerticalNav; 