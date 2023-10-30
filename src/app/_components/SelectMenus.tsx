export default function SelectMenus(){
    return(
        <>
            <select
                name="sort"
                className="border border-primary  py-2 pl-9 pr-3 bg-background-light
                focus:outline-none focus:border-accent  sm:text-sm mx-4 " >
                <option className="text-text" value="">Sort by</option>
                <option value="JM">John Mayer</option>
                <option value="SRV">Stevie Ray Vaughn</option>
            </select>
        </>
    )
}