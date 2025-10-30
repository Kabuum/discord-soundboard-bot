export default function SoundBite({name, iconURL, onClick}) {

    return(
        <div className=" text-black bg-white rounded-2xl border-gray-900 w-40 h-20 flex flex-row gap-4 items-center justify-center cursor-pointer border-2 hover:bg-gray-200 transition" onClick={onClick} >
            <img width={"40"} height={"40"} src={iconURL} alt="" className={'rounded-2xl mb-2'} />
            <p className={"text-center"}>{name}</p>
        </div>
    )
}
