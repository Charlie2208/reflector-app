export default function StatsBar() {
    return (
        <div className="stats-bar">
            <div className="stat-item">
            <div className="stat-number">+80</div>
            <div className="stat-label">Clientes activos</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
            <div className="stat-number">+5M</div>
            <div className="stat-label">Inversión gestionada</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
            <div className="stat-number">3X</div>
            <div className="stat-label">ROI promedio</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
            <div className="stat-number">+4</div>
            <div className="stat-label">Años de experiencia</div>
            </div>
        </div>
    )
}