import React from 'react';
import { useState } from 'react';
import Div from '../Div';

export default function VideoModal({ videoSrc, bgUrl, variant }) {
  const [toggle, setToggle] = useState(false);
  const isLocalVideo = /\.(mp4|webm|ogg)$/i.test(videoSrc);

  const handelClick = () => {
    setToggle(!toggle);
  };
  const handelClose = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Div
        className={`cs-video_block ${
          variant ? variant : 'cs-style1'
        } cs-video_open cs-bg`}
        style={{ backgroundImage: `url(${bgUrl})` }}
        onClick={handelClick}
      >
        <span className="cs-player_btn cs-accent_color">
          <span />
        </span>
      </Div>
      <Div className={toggle ? 'cs-video_popup active' : 'cs-video_popup'}>
        <Div className="cs-video_popup_overlay" />
        <Div className="cs-video_popup_content">
          <Div className="cs-video_popup_layer" />
          <Div className="cs-video_popup_container" style={{position: 'relative', background: 'black', boxShadow: 'none', border: 'none', paddingTop: '32px'}}>
            {/* Modern Close Button, floating top-right, outside video */}
            <button
              className="cs-video_modal_close_btn"
              onClick={handelClose}
              aria-label="Close video"
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                zIndex: 20,
                background: 'rgba(0,0,0,0.7)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                transition: 'background 0.2s',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="5" x2="17" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="17" y1="5" x2="5" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <Div className="cs-video_popup_align" style={{marginTop: '32px', padding: 0, background: 'black'}}>
              <Div className="embed-responsive embed-responsive-16by9" style={{background: 'black', border: 'none', boxShadow: 'none'}}>
                {isLocalVideo ? (
                  <video
                    className="embed-responsive-item"
                    src={videoSrc}
                    controls
                    autoPlay
                    muted
                    style={{ width: '100%', height: '100%', background: 'black', border: 'none', boxShadow: 'none', display: 'block' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* Custom style for close button hover */}
      <style>{`
        .cs-video_modal_close_btn:hover {
          background: #d90d0d;
        }
      `}</style>
    </>
  );
}
