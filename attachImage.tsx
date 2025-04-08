import { useRef } from "react";

interface AttachImageProps {
    onImageSelect: (imageDataUrl: string) => void;
}

const AttachImage = ({ onImageSelect }: AttachImageProps) => {
    const [image, setimage] = useState()
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {        
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e?.target?.files ? e?.target?.files[0] : null;
        
        if (selectedFile) {
            const fileURL = URL.createObjectURL(selectedFile); // Create a temporary URL for the image
            setimage(fileURL)
        }
    };

    return (
        <div>
            <button
                type="button"
                onClick={handleButtonClick}
                className="inline-flex justify-center items-center p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
                <span className="sr-only">Upload image</span>
            </button>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
            />
            //menampilkan image
            {image && (
                <div style={{ marginTop: "20px" }}>
                    <Image
                        src={image}
                        alt="Selected"
                        width={100}
                        height={100}
                    />
                </div>
            )}
    </div>
    );
};

export default AttachImage;
