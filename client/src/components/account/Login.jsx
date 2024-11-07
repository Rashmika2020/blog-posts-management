import {Box, Button, TextField, Typography, styled} from "@mui/material"
import BlogLogo from "../../assets/blog-logo.png"
import { useState } from "react"

const Image = styled('img')({
    width:150,
    margin:'auto',
    display:'flex',
    padding:'30px 0 0'
})

const Login = () => {

    const [account, toggleAccount] = useState('login');

    const toggleSignUp = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return(
        <Box sx={{width:400, margin:"auto", boxShadow:"5px 2px 5px 2px rgb(0 0 0/0.4)"}}>
        <Box>
            <Image src={BlogLogo} alt="login" />
            {
                account==='login'?
                        <Box sx={{padding:"25px 35px", display:"flex", flex:1, flexDirection:"column"}}>
                            <TextField variant="standard" label="Enter Username" />
                            <TextField variant="standard" label="Enter Password"/>
                            <Button variant="contained" sx={{marginTop:5, textTransform:"none", background:"#fb641b", color:'#fff'}}>
                                Login
                            </Button>
                            <Typography sx={{ textAlign:"center", color:"#878787", fontSize:14, marginTop:5}}>OR</Typography>
                            <Button onClick={() => toggleSignUp()}
                            sx={{marginTop:5, textTransform:"none", background:"#fff", boxShadow:"0 2px 4px 0 rgb(0 0 0/0.3)", color:"black"}}> 
                                Create an account
                            </Button>
                        </Box>           
                :
                        <Box sx={{padding:"25px 35px", display:"flex", flex:1, flexDirection:"column"}}>
                            <TextField variant="standard" label="Enter Name" />
                            <TextField variant="standard" label="Enter Username"/>
                            <TextField variant="standard" label="Enter Password"/>
                            <Button sx={{marginTop:5, textTransform:"none", background:"#fff", boxShadow:"0 2px 4px 0 rgb(0 0 0/0.3)", color:"black"}}>
                                SignUp
                            </Button>
                            <Typography sx={{ textAlign:"center", color:"#878787", fontSize:14, marginTop:5}}>OR</Typography>
                            <Button variant="contained" onClick={() => toggleSignUp()}
                            sx={{marginTop:5, textTransform:"none", background:"#fb641b", color:'#fff'}} > 
                                Already have an account
                            </Button>
                        </Box> 
} 
        </Box>        
        </Box>
    )
}

export default Login;