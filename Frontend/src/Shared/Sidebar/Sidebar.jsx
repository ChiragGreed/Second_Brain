import { useNavigate } from 'react-router-dom';
import './Sidebar.scss';

// ── SVG icons ──────────────────────────────────────────────────────────────
const icons = {
    graph: (
        <svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="19" cy="19" r="2" /><circle cx="12" cy="12" r="2" /><line x1="7" y1="12" x2="10" y2="12" /><line x1="13" y1="12" x2="17" y2="6" /><line x1="13" y1="12" x2="17" y2="18" /></svg>
    ),
    collections: (
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
    ),
    resurfacing: (
        <svg viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M4.22 6.22l2.83 2.83M16.95 16.95l2.83 2.83M3 12h4M17 12h4M6.22 17.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
    ),
    dashboard: (
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="5" rx="1" /><rect x="13" y="3" width="8" height="5" rx="1" /><rect x="3" y="11" width="8" height="10" rx="1" /><rect x="13" y="11" width="8" height="10" rx="1" /></svg>
    ),
    search: (
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
    ),
    settings: (
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
    ),
    help: (
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><circle cx="12" cy="17" r="0.5" fill="currentColor" /></svg>
    ),
    logomark: (
        <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
    ),
};

// ── Nav config ─────────────────────────────────────────────────────────────


const FOOTER_NAV = [
    { id: 'settings', label: 'Settings', icon: icons.settings },
    { id: 'help', label: 'Help', icon: icons.help },
];

// ── Component ──────────────────────────────────────────────────────────────
const Sidebar = ({ activeScreen, onNavigate }) => {

    const navigate = useNavigate();


    return (
        <aside className="sidebar">
            {/* Brand */}
            <div className="sidebar__brand">
                <div className="sidebar__logo-mark">
                    {icons.logomark}
                </div>
                <div className="sidebar__brand-text">
                    <span className="sidebar__brand-name">Reagle</span>
                    <span className="sidebar__brand-sub">Workspace</span>
                </div>
            </div>

            {/* Body */}
            <div className="sidebar__body">
                <div className="sidebar__section-label">Explore</div>
                <div className='explore_section'>
                    <p onClick={() => navigate('/inbox')}>Inbox</p>
                    <p onClick={() => navigate('/collections')}>Collections</p>
                    <p onClick={() => navigate('/knowledgeGraph')}>Knowledge Graph</p>
                    <p onClick={() => navigate('/resurfacing')}>Resurfacing</p>
                </div>

            </div>

            {/* Footer */}
            <div className="sidebar__footer">

            </div>

        </aside>
    );
};

export default Sidebar;