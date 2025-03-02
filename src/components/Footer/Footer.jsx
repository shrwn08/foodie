import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Instagram } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { YouTube } from '@mui/icons-material';


function Footer (){

    return ( 
        <div className="w-full h-12  flex justify-center items-center bg-gray-400">
            <div className="w-5/6 h-full">
                <div className="w-2/3 h-full flex justify-between items-center">
                    <div className=" flex justify-between items-center gap-5">
                        <FacebookOutlinedIcon />
                        <Instagram />
                        <Twitter />
                        <YouTube />
                    </div>
                    <div>
                    Copyright   &#169;    2025 Dscode | All rights reserved
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;