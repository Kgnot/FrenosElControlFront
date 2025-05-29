import './Slogan.css'

export const Slogan = ({ className, isCollapsed }: { className: string, isCollapsed?: boolean }) => {
    const sloganText = "frenos el control";

    if (isCollapsed) {
        return (
            <div className={`slogan ${className} collapsed`}>
                <span className="slogan-icon">F</span>
            </div>
        );
    }

    return (
        <div className={`slogan ${className}`}>
            <span className="slogan-text">{sloganText}</span>
        </div>
    );
};