import React, { useEffect, useRef } from 'react';
import parse from 'html-react-parser';
import './hero.scss';
import Button from '../Button';
import Div from '../Div';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  bgImageUrl,
}) {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      // Animate each direct child (line or span) of the title
      const children = Array.from(titleRef.current.childNodes);
      children.forEach((el, i) => {
        if (el && el.nodeType === 1) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(40px) scale(0.95)';
          setTimeout(() => {
            el.style.transition = 'opacity 0.5s cubic-bezier(0.23,1,0.32,1), transform 0.5s cubic-bezier(0.23,1,0.32,1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) scale(1)';
          }, 200 + i * 60);
        }
      });
    }
  }, [title]);

  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title" ref={titleRef}>{parse(title)}</h1>
          <Div className="cs-hero_info">
            <Div>
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a> */}
    </Div>
  );
}
