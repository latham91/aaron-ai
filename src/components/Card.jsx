import PropTypes from "prop-types";

export default function Card({ image, prompt, name, index, createdAt }) {
    const dateNow = new Date();
    const dateCreated = new Date(createdAt);
    const seconds = Math.floor((dateNow - dateCreated) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    const timeSince = () => {
        if (years > 0) {
            return `${years} year${years > 1 ? "s" : ""} ago`;
        } else if (months > 0) {
            return `${months} month${months > 1 ? "s" : ""} ago`;
        } else if (days > 0) {
            return `${days} day${days > 1 ? "s" : ""} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? "s" : ""} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
        } else {
            return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
        }
    };

    const postTime = timeSince();

    return (
        <div
            className={`relative border-primary/10 border-2 rounded-xl group shadow-card hover:shadow-cardhover card ${
                index % 5 === 0 && "col-span-2 row-span-2"
            }`}
        >
            <img src={image} alt={prompt} className="object-cover rounded-xl" />
            <div className="absolute bottom-0 left-0 right-0 flex-col hidden p-4 m-4 rounded-md group-hover:flex bg-background/90 backdrop-blur-sm">
                <p className="overflow-y-auto text-white text-md prompt">&quot;{prompt}&quot;</p>
                <div className="flex items-center justify-between gap-2 mt-5">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center object-cover w-8 h-8 text-xs font-bold text-white bg-green-700 rounded-full">
                            {name[0]}
                        </div>
                        <p className="text-sm text-primary">{name}</p>
                        <span>&bull;</span>
                        <p className="text-sm text-primary">{postTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string,
    prompt: PropTypes.string,
    _id: PropTypes.string,
    name: PropTypes.string,
    index: PropTypes.number,
    createdAt: PropTypes.string,
};
