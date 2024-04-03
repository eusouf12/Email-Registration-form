import { NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
        <li><NavLink to={"/"} className={({ isActive }) => isActive ? 'text-[#be0abe] border-[1px] border-[#23BE0A] text-lg' : 'btn-ghost'}>Home</NavLink></li>
        <li><NavLink to={"/login"} className={({ isActive }) => isActive ? 'text-[#be0abe] border-[1px] border-[#23BE0A] text-lg' : 'btn-ghost'}>Login</NavLink></li>
        <li><NavLink to={"/register"} className={({ isActive }) => isActive ? 'text-[#be0abe] border-[1px] border-[#23BE0A] text-lg' : 'btn-ghost'}>Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-12 h-12 rounded-3xl' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMPEhUSEBIQEBAWExATEhUQFxMTFRAVFRcXGhgTFhYYKCggGBolGxcVITMhJikrLjAuGCszODMtOSguLisBCgoKDg0OGxAQGi4lICY3NzUtLSswMystLS0tLS0tLSstNy03LjU1NS4tLS0vLS0tLS0tLi4tLS8tLS0vLS8wLf/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQHAv/EAEQQAAIBAgMDBgoGCgIDAQAAAAABAgMRBCExBhJBBRNRYXGRFBUiIzJSgaGi0QczYnKxwTRCQ1NUc4OTsrPw8WOCkiT/xAAbAQEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADgRAQABAgIFCQUJAQEBAAAAAAABAgMEEQUSITFBExRRYXGBkaHwIkKx0eEGIzIzNFJTssHxckP/2gAMAwEAAhEDEQA/APQSycuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxmBkAAAAAAAAAAAAAAAAAI/lnlWOFhvPypO6hH1n+SRExmLow1GtO/hHS8V1xTCj43lmvWd5VJJerBuMV7Fr7bnLXsffuznNWXVGyEWq5VPFpocoVabvCpUi/vO3tTyZqoxV6ic6a58WIrqjit+zu0HhD5urZVbZNZKpbXLgzo9H6S5f2K9lXxSLd3W2Sny2bgAAAAAAAAAAAAAAAB81aignKTUYpNtvRJas81VRTGc7nu3bru1xRRGczsiOmZUrlPaGrXk40N6FNKT8hPfcUruUms4pLPLTiykv465cnKjZHm+l6M+zOFwtEV4mIrr6/wAMT0RHHtnPPhEIfwuaz5yon078r99yHylW/OfF0PNLExq8nTl0asZfBOcl7R1KMubxO9KOSbmmqlO6TTfFqzTzzs79ROw+OronVubY84cxpX7L4fEW5u4OIpq6I/DV1dU9mzhMcYuUXdXWaeaa4l1E5vnFVM0zMTGUwyZYAAAAAAAAAAAAAAAKFtPUlWxTgs7blOC63b8Wzk9K11XMVNHRlEItzOqvVhjaDZutgVCVVJxmtYZqEuNNvpt38NCJiMLXZiJq4+sm3E4O5h4iauPx6Fh2W2Nio+FY+1OlFb6pz8m6X61W+kfs8ePQ5mFwOzlLu7o+adg9HRlyl/d0fP5Kvy1ypQli5VMFGVOmpKUL5KUlrKMf1Yv1X7tFHvV00XuUtbMvihYvU5Wa7UbHocJbyTWjSfedlE5xm2PoyAAAAAAAAAAAAAAAEBtnXcaMYr9eaUuxJu3ekV+kq5i1FMcZdZ9j8PTcxtVyr3KdnbOz4ZuHYTl+lg6so1oxUKlourbyqXVL/wAb49GrutKvD3Yonb4uz0xgLmJtxNudtPu9PZ1/Hht33GGxmFpYh4ptKjFc4qcrKlTkrt1L+qlmo6LsslKjD0RVrcFDVpjE12Ise9uz4zHR29M758c/P9tdpaeNxClShFU4JwVSzU62fpP7K4J55t8bKNfqiuc4XeirFeFt6tc7+HCPXH6LFsjiN/DpN33JSh7FZpexSS9ha6PrmqzlPDY4f7VYem1pCaqffiKu/bE+Mxn3ponObAAAAAAAAAAAAAAAKDtbhnDESl+rNKS7kmu9e85LS9qaMRNXCdv+Il6Mqlq2W2zpcy6ePabpJThOa3ucUWnFW41E7Wer7Vd7sJjKaqdW7w8/qucFj6aqNS9vjdM8frCnbYbYVeUJbqvTwyfkU1rK2kqj4y6tF73pxGJquzlG5HxOLqvTlujo+aAweHlVnGnD0pSUV1X4+zU0W7c3K4ojiiZZvY4RsklokkvYdnEZRk2smQAAAOnD4GdRXik1e2qRrquU0zlKRaw1y5TrUtniqr0LvR55ahs5je6PNwYjkvGt+RGnGPC8otvtKq/iMbVX91ERHjPf9PFbYfR+Epo+9zqnviO76urDcl4hrzkIqX2ZJp9fUTsPiK5o++jKerdKDidH5V/cznHXvhpq03FtSVmiXExMZwrq7dVFWrU+T08AAAAAgtscM50N5fs5KT+7Zp910/YQNI25qtZxwdR9ksVTZx3J1e/GUdu+PHbHbMOHYDA4apVlPEzjvUlvwpzsotRzdRt5Pd6OGpV4emias6na6av4i3aim1GyrZMxv7O/p7k5R+kujLFOnKO7g35Mazvfev6covSm9OlWu9XuyOcRrZcFJVoe5FnWifb6P8jr9R1076QeTcNhsTbCzXlLfqUo5xoN5pRlpaSd93h2NJab1NNNXsrTRt69ds53Y7J6f+dPHtiVk2NwjpYWG8rSm5VLPgpej8Kj3ltgrepajPjtcL9osVF/HVas5xTEU+Gcz5zKcJajAAAAAAAAAAAAAAAOLlbkyGJhuSyazjJaxf5rqIuLwtGJo1Ku6eh5roiqMlJx2z9ek2ubdSPTT8pP2LNdxzN7RmItTspzjpjaizbqhGU9n8ROVoUalumScEu1ysjNrCX7nuT37Pi3U5zG1ddmNmlhPOVGp1mrZejTT1Uel9fs6b32CwEWPaq21fBtiMlhLFkAAAAE9yH9W/vP8EQ7/wCJdaP/ACu9ImlOAAEHyhFObg1Lfd5R3YuWTbzy4ZG6ivV2od+zFz2Z38EdUg4tp6p2ZLic4zUtdM01TTPB8mXkAAAMSV8nmnk78TG9mJmmc43qhyvspK7lQtOD/ZyaTj1Rbya7be0qL+j6onO1u6H0HRf2ttVURbxuyr90RnE9sRtieyJjsVyez2J3rKhUfRkrd+hGjDXv2ytK9L4CNsXqcu3/ADeneQdjGmp4rdSWapRs7v7bWVupXv08CbYwE553PD5ue0p9p6Zpm3hM859+dmX/AJjf3zll0cV2LRxQAAAAAAAAAAAAAAAAAAAAAAAAfNSooq8morpk0l3swRGe5z1sYt181KFSdsoqSbfTktbK79hFx2JnD2Krkb4y85iP9TMFheXv026s4if8jNMbJYh+CznLem1Oo7JXbslkkuPUVmBu13bc1VznMy6DE0UWNlFOyI3R62y+6GMxL3VUhOElvJ7sN5VJ3TjFyjvKEN123ulPNWsTFTRexGzXiYnszznhGzPKMuPnG58VcdiFFbvOylzdZveozjarGKcYJbrur3tnn0vjl4qv34p9nOZyn3Zj2ojZG6dmfXt6ZbcXUxVON770kk7QjvLOqlqo3bVN3dlqslwMNl2rE0U5756oz97s/bv2dzp5NxFWVSSmpbiUs5QcLNNbqi2lvJxu3llbrsjdYuXaq5iqNnZl2ZdOceCrVsVJYmspPzSqTu5Oyhnlm+l8CDhMbXTi5sTOcTM5dWzNv0jgrdWH5amMqoy79uXqW+GKpydozg3wSlFt+wv3OTTMcG4ywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACifSQ71KEXnHcqys9L3ir26bHirescDuqlG7FUorG0mkk/O6Jfu5lTpn9FX3f2hb4Ofvo9cHrnJuM5q6a8hu7tqm+PWc3gNIzh/Yr20+cev+LO/Y19sb0r4RfNTVuHkt+86uiqmumKqdsSqqs6Zylnnvt/Az1l1MZ9Zz32/gYy6jPracRyioK19+fDJpLtK3HaQow3sxtq6Ojt+STYsTc28FJ21Slg67aXlOEpZLNupDMptF3KrmPoqq3zn/WUvFRq2JiOr4vKq1NRi3FKMkrprJprNNNaM7aYUsPaaErxi3q4xb7jYoZ3vsywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFD+kX66h/Lq/5RPFW9Y4L8NTg2M/TKX9X/AFzKrTP6Kvu/tC2wf50euD044deN1DFulo2o8V/ziTMHjbmGq9nbHGPXFpu2YuR19L5xHLk7+bbUeG9Zt9ttCwvaZuTV91ERHXtlqowVMR7U7W6HLLlFJOSnx0t/6i7pmuq1lRTlVxnh3fXd1sU4KIqzmc4czd9c2UczMznKZuQu2X6HV/p/7IFlof8AW0d/9ZRsZ+TPri8rxPoS7GdzO5RxvezYb0I/dj+CNkKKrfLYZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACh/SL9dQ/l1f8onirescF+GpwbGfplL+r/rmVWmf0Vfd/aFtg/zo9cHplSoo6/9nDrxx1ajlr3HqIenwZZAOmjiOEu/5nmYeckdtl+h1f6f+yBY6H/W0d/9ZRcZ+TPri8rxPoS7GdzO5RxvezYb0I/dj+CNkKKrfLYZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACh/SL9dQ/l1f8onirescF+GpE7M4qNHE051JRhFb6bk7JXhJK74ZtFbpW3VcwldNEZzs2R2wtcJVFN2JqnKPou0uXMM83icP/cp/M5DmOJ/jq8JXXL2v3R4seOsN/E4f+5T+Y5lif46vCTnFr90eJ46w38Th/wC5T+Y5lif46vCTnFr90eJ46w38Th/7lP5jmWJ/jq8JOcWv3R4njrDfxOH/ALlP5jmWJ/jq8JOcWv3R4uDaPlqjPC1KcK1GpKW4oxhOMpZTi3kuFkyw0XhL9GLoqqomIjPbMTHCUbF3bdVqYiqM/qoOJ9CXYzr53KaN72bDehH7sfwRshRVb5bDLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUD6SqijVoN6c3VXxRNdW9Y4H8NSo+Fw6TGabkx4TT6u4ZwHhNPq7hnAeE0+ruGcB4TT6u4ZwHhNPq7hnALFQ6u4ZmT5r4qLi0nnZmJlmI2vbMP6Efux/BG1Q1b5bDLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzGLbss28l1mNzMRMzlCcjydShBOpTp1JpPOUVJ3fBX0WncQq65rqX1ixTZo6+LjVGH7ulr+7p692hnJ61pZdCCv5ulk8/N0+vq006xkzrSOhBX83Sy183Tzvpw006zGRrScxD93S0v9XTzXdoMjORUIZebpdP1dPPqWXb3DIzkjQhl5ulm/wB3Tz08nTrGRnLHMwtfm6XH9nT/APnQzkxrS24TD0ptxnRotPS9OFuzQxVGW56pnOcpaOVsHzct6K8iXwvoJFq5rRlO9U4zD8nVrU7p8nAbkIAAAAMwAAAAAAAAAAAAAAAAAAcXKWPVJWWc3ouCXSzdZs687dzXcuaqBqYidR5ylJvRK/ckidFFNMbIRs6qpfSqVKTt5dN62ldfCzGrRXHCWZ16JynOO1N8mcoc6rOymujSS6UQr1nU2xuSLdzW7XcaWwAmORcH+0l2Q/ORGv1+7C0wGH/+lXd80nXoKeUr2XXYjxOSzmmJ3tXgUOhrjk9OzoM60vOpA8DDofeNaTUhwSs28tXfVntrliy6PfL5hgsujq1l8wOnCUYy1VnF3Vm+P/R5qmYe6YiW/wABhpZ631Ma0vWpDPgcOi2d8srDWlnUhsr0VOLjLR+7rMU1TTOcMXLcXKZplWMRRcJOMtV7+sn01RVGcOduW5t1TTLWenhhsq9K6Ut4C1r1bap/DHT9ITsBgasXc1Y2RG+fXFiKbdldt5JLifPL+k8bjbmU1zOe6mNkeEf7tdfZwWHw9Ps0x2zv8WakHF2kmmtUzTF/GYO5lrVU1Rwzba7Nm9T7VMTAmdtoPT3O55G/sr4T+76+U9TmNJ6K5COVtfh4x0fRk6dSAAAAAAAAAAAAAAAACq4+pvVJN+s0uxZL8CztU5URCFXOdUpPZjlOnhpylOnUqTluxp82otrW6V2s35PcaMXZru0xFMxERvzTMBibdiqZqpmZnZGWXrbsTX0gSXgcZzShW36e4k7tSa8uKfFWv3IrsHMxdmKZ2eslvpCIqsRNcbdnjxhQ+TeUnGpBtfrJXXQ8n7i1rq1qZiVDFGU5wvJXpABsji6scoTy6JXy7LM8TbpnbLfRirtEZUzs62fGFf1ofH8zHI0NnPr/AFefzPGFf1ofH8xyNBz6/wBXn8zxhX9aHx/McjQc+v8AV5/M8YV/Wh8fzHI0HPr/AFefzPGFf1ofH8xyNBz6/wBXn8zxhX9aHx/McjQc+v8AV5/M8YV/Wh8fzHI0HPr/AFefzPGFf1ofH8xyNBz6/wBXn8zxhX9aHx/McjQc+v8AV5/M8YV/Xj8fzHI0Mc+v9Xn82uU3LOTcnxb4nuIiNkI9ddVc51TnLBl5fEj5l9pL9V3H1UzupyiPDOfOZdroe1FGFpnjO2fXZk6uS/rYdv5Mi6G/XW/XCU3E/lVI/ayo44luLa8iGntLTTtMTidvRCPhZytuGjym16av1rJ9xS26ZtXKblucpic47kivKumaKt07Esnc+t01a0RPS+fVU6szHQyemAAAAAAAAAAAAAAACr8o0typJdbkux5/87CztVa1EShVxlVLq2aX/wCqllvPek0r2u1CTWfv9hrxf5NXrikYH9RR64S49tcXUrYqalpTtCEE77mSbduLbzv2dBowtuKbcTHFKxt2qq9MVcEVyTh3VrQivWTl1KOb/D3m2ucqZRoX8hNgAAAAAAAAAAAAAAAA+JHzX7TYaq1jpr4V5THhlPrrdnoa9FzCxTxp2T8Y8m/ASaqRcVvO+S0v7St0ZVXTi6JtxnOe7csb8RNuc5R200JzrycopO0Uoxe87WyfX7C00tcrnEzylOr57O1Hw9ManszmiKcHJqK1bsQ8PZqvXabdO+Zertym1RNdW6FjSsfU4iIjKHBTMzOcsmWAAAAAAAAAAAAAAADlx+CVZdElo/yfUbLV2aJeK6IqhCSwVam7pSutJU7+5rNE2LtuuMp80fUrpnOPJonyRUrSbcZqTzcptq/W97Nnmqu1TG/weom5M7fNO8k8mLDrXfm/Sk+j1V1ES5cmtvppyd5regAAAAAAAAAAAAAAABhogaR0fax1nk7ndPGJ9b4SsHi68Lc16O+OliN07rJrRrgcDiNA4/C161umast007fLf5Oss6Vwt6nbVl1VbPo5cZg+dk5uUt96tu9+8WsBpPEV51W6pnpq9n45PVzG4S1T+OO7b8H3hcNuZye9LpfBdCep2WidDUYL26ttc+Ednzc3pDSVWJ9inZT5z2/J0l2qwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==" alt="" />
                    <a className="btn btn-ghost text-xl lg:text-3xl font-bold">Email <span className="text-orange-500">Auth</span></a>
                   

                    
                </div>

            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-3 space-x-5">
                    {links}
                </ul>
            </div>
            <div className='navbar-end'>
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>
    );
};


export default Header;