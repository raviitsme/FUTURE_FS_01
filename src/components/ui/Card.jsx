export default function Card({ children, classname="" }) {
    return (
        /* Fixed: Both gradients use --border-angle-0, but the second one is offset by 180deg via calc() */
        <div className={`m-8 transition-all duration-150 hover:shadow-[0px_8px_80px_rgba(255,255,255,0.9)] hover:shadow-cyan-200/20 hover:scale-105 hover:bg-[conic-gradient(from_var(--border-angle-0),transparent_80%,#7c3aed_90%,#d946ef_100%),conic-gradient(from_calc(var(--border-angle-0)+180deg),transparent_80%,#7c3aed_90%,#d946ef_100%)] animate-rotate-border-0 w-2xl p-0.5 rounded-3xl h-64 justify-center`}>
            <div className={`flex justify-center items-center w-full h-full rounded-3xl text-white ${classname}`}>
                {children}
            </div>
        </div>
    )
}
