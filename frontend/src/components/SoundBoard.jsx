import SoundBite, {SoundBiteCreate} from "./SoundBite.jsx";
import {useState} from "react";
import SoundUploadModal from "./SoundUploadModal.jsx";
import {uploadSoundData} from "../services/UploadSoundService.jsx";

export default function SoundBoard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSubmit = async (data) => {
        console.log("Uploading sound:", data);
        await uploadSoundData(data);
    };


    return(
        <div className=" flex flex-wrap justify-start gap-4" >
            <SoundBite name={"It's boiled"} iconURL={"https://media.discordapp.net/attachments/813981652455391257/1433510909543841792/artworks-uQr9kaYJDzBHsvQd-MCLKmw-t500x500.jpg?ex=6904f492&is=6903a312&hm=bbf7a4f106e70aae40411b4b1d6d2581ed08e26d3764300401add80bbb0c94c4&=&format=webp&width=750&height=750"} soundURL={"https://cdn.discordapp.com/attachments/1202680767755583559/1433161675388882974/water_ice_salt_aye.mp3?ex=69045812&is=69030692&hm=a19644a84a0fde5e177df140c6e23aeeb5bb32709fa5fede2ca6483a3d979543&"}></SoundBite>
            <SoundBite name={"Doogay"} iconURL={"https://media.discordapp.net/attachments/813981652455391257/1433552274260492329/image.png?ex=69051b18&is=6903c998&hm=85a680e8d68da88777af1cb3c52f241079351ab70d1494225c95537ab23ac5b7&=&format=webp&quality=lossless&width=1124&height=1208"} soundURL={"https://cdn.discordapp.com/attachments/1202680767755583559/1433161675825217658/JIGGLABANG_FUHALATANG_WIBBLY_DOOGAY.mp3?ex=69045812&is=69030692&hm=d78676fa80d231d45fa5067aa190f493c9d3a6bf5e0978b2bee31a02b2ef70c1&"}></SoundBite>
            <SoundBiteCreate onClick={() => setIsModalOpen(true)}></SoundBiteCreate>
            <SoundUploadModal isOpen={isModalOpen} onClose={() =>setIsModalOpen(false)} onSubmit={handleSubmit}></SoundUploadModal>
        </div>
    )
}
