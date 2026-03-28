import React from 'react';
import '../Styles/Pages.scss';

const NavItem = ({ icon, label, badge, badgeVariant = 'default', active = false, onClick }) => {
  return (
    <div
      className={`nav-item${active ? ' nav-item--active' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      aria-current={active ? 'page' : undefined}
    >
      {icon && (
        <span className="nav-item__icon">
          {icon}
        </span>
      )}

      <span className="nav-item__label">{label}</span>

      {badge !== undefined && (
        <span className={`nav-item__badge${badgeVariant !== 'default' ? ` nav-item__badge--${badgeVariant}` : ''}`}>
          {badge}
        </span>
      )}
    </div>
  );
};

export default NavItem;