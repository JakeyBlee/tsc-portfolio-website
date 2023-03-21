import { useEffect } from "react";

export const Navbar = (props : any) => {
    const page = props.page;

    const handleNav = (e : any) : void => {
        const target : string = e.target.innerHTML.toLowerCase();
        props.updatePage(target.substr(4).split(" ")[0]);
    }

    useEffect(() => {
        document.getElementsByClassName("navLink active")[0].className = "navLink";
        if(page === 'profile'){
            document.getElementsByClassName("navLink")[0].className = "navLink active";
        } else if(page === 'employment'){
            document.getElementsByClassName("navLink")[1].className = "navLink active";
        } else if(page === 'qualifications'){
            document.getElementsByClassName("navLink")[2].className = "navLink active";
        } else if(page === 'projects'){
            document.getElementsByClassName("navLink")[3].className = "navLink active";
        }
    }, [page])

    return (
        <section className='navbar'>
            <div className='navLinks'>
                <div className='navLink active' onClick={handleNav}>
                    &#60;Profile /&#62;
                </div>
                <div className='navLink' onClick={handleNav}>
                    &#60;Employment /&#62;
                </div>
                <div className='navLink' onClick={handleNav}>
                    &#60;Qualifications /&#62;
                </div>                
                <div className='navLink' onClick={handleNav}>
                    &#60;Projects /&#62;
                </div>
            </div>
        </section>
    )
}