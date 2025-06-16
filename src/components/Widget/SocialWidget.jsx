import { Icon } from '@iconify/react';

export default function SocialWidget() {
  return (
    <div className="cs-social_btns cs-style1">
      <a href="https://www.linkedin.com/company/raising100x/" target="_blank" rel="noopener noreferrer">
        <Icon icon="fa6-brands:linkedin-in" width="20" height="20" color="#ffffff" />
      </a>
      <a href="https://x.com/raising100x" target="_blank" rel="noopener noreferrer">
        <Icon icon="fa6-brands:x-twitter" width="20" height="20" color="#ffffff" />
      </a>
      <a href="https://www.youtube.com/@Raising100x" target="_blank" rel="noopener noreferrer">
        <Icon icon="fa6-brands:youtube" width="20" height="20" color="#ffffff" />
      </a>
      <a href="https://www.instagram.com/raising100x/" target="_blank" rel="noopener noreferrer">
        <Icon icon="fa6-brands:instagram" width="20" height="20" color="#ffffff" />
      </a>
    </div>
  );
}
