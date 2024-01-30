import { useState } from "react";
import { useNavigate } from "react-router-dom";
import preview from "/preview.png";
import Form from "../components/Form";
import Container from "../components/utility/Container";

const randomPrompts = [
    "Skyborne cityscape with floating bridges and flying creatures at sunset.",
    "Mythical forest chess game with magical creatures under ancient trees.",
    "Quantum particles dancing in an ethereal cosmic choreography.",
    "Cyberpunk jungle aglow with neon lights and exotic bio-animals.",
    "Steampunk underwater metropolis with Victorian-era submarines.",
    "Abstract dreamscapes in vivid technicolor, ever-shifting landscapes.",
    "Futuristic library with knowledge stored as streams of light.",
    "Galactic garden with celestial flowers blooming in stardust bursts.",
    "Time-traveling explorer meeting alternate selves across eras.",
    "Robot orchestra playing a symphony in a crystal cave.",
    "Solarpunk cityscape with sustainable architecture and green energy.",
    "Enchanted desert oasis with mystical creatures and floating lanterns.",
    "Bioluminescent underwater world with glowing sea creatures.",
    "Whimsical carnival in a cosmic space with gravity-defying rides.",
    "Digital garden of neon flowers blooming in a virtual reality landscape.",
    "Ancient temple ruins surrounded by lush, bioluminescent flora.",
    "Artificial intelligence playing a strategic game of interstellar chess.",
    "Microscopic world teeming with vibrant, fantastical organisms.",
    "Journey through a time vortex with swirling portals to different eras.",
    "Futuristic sports arena on a floating island with holographic players.",
];

export default function CreatePost() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [imgGenerating, setImgGenerating] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        prompt: "",
        image: "",
    });

    const generateImage = async () => {
        if (formData.prompt) {
            try {
                setImgGenerating(true);

                const response = await fetch("https://ai-aaron-api.onrender.com/api/v1/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();
                console.log("CreatePost.jsx", data);
                setFormData({
                    ...formData,
                    image: `data:image/jpeg;base64,${data.image}`,
                });
            } catch (error) {
                console.log(error);
            } finally {
                setImgGenerating(false);
            }
        } else {
            alert("Prompt cannot be an empty value");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.prompt && formData.image) {
            setLoading(true);

            try {
                const response = await fetch("https://ai-aaron-api.onrender.com/api/v1/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();
                console.log("CreatePost.jsx 2", data);
                navigate("/");
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        } else {
            alert("Please enter a prompt to generate an image.");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRandom = () => {
        const randomPrompt = randomPrompts[Math.floor(Math.random() * randomPrompts.length)];

        setFormData({
            ...formData,
            prompt: randomPrompt,
        });
    };

    return (
        <Container>
            <div className="mt-16">
                <h1 className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-accent via-teal-500 to-fuchsia-500 bg-clip-text">
                    Generate an Image
                </h1>
                <p className="w-3/4 mt-5 text-lg">
                    Bring your visions to reality by providing prompts to our DALL-E AI generator, and witness the magic
                    as it transforms them into one-of-a-kind images.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10">
                <div className="flex flex-col gap-10">
                    <Form
                        labelName="Your name"
                        type="text"
                        name="name"
                        placeholder="eg. John Doe"
                        value={formData.name}
                        handleChange={handleChange}
                        className="w-1/4"
                    />
                    <Form
                        labelName="Enter a prompt or"
                        type="text"
                        name="prompt"
                        placeholder="eg. A cyberpunk girl with a katana walking down a dark alley"
                        handleChange={handleChange}
                        value={formData.prompt}
                        isRandom
                        handleRandom={handleRandom}
                    />

                    <div className="relative flex items-center justify-center w-full h-full p-4 text-sm bg-gray-700 rounded-lg text-accent focus:ring-accent focus:border-primary/50">
                        {formData.image ? (
                            <img src={formData.image} alt={formData.prompt} className="object-contain w-full h-full" />
                        ) : (
                            <img src={preview} alt="preview" className="object-contain w-1/2 h-1/2 opacity-40" />
                        )}

                        {imgGenerating && (
                            <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                                <div className="w-10 h-10 border-4 border-t-4 border-white rounded-full animate-spin"></div>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-5">
                        <button
                            type="button"
                            onClick={generateImage}
                            className="px-6 py-3 font-semibold rounded-lg bg-accent text-primary hover:bg-hover"
                        >
                            {imgGenerating ? "Generating..." : "Generate Image"}
                        </button>
                    </div>

                    <div>
                        <p>
                            Once your image has been generated you can choose to share it with others on the community
                            homepage.
                        </p>
                        <button
                            type="submit"
                            className="px-6 py-3 mt-3 font-semibold rounded-lg bg-accent text-primary hover:bg-hover"
                        >
                            {loading ? "Sharing..." : "Share my image with the community"}
                        </button>
                    </div>
                </div>
            </form>
        </Container>
    );
}
