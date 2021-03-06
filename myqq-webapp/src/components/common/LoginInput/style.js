import styled from 'styled-components'
const InputStyle = styled.div`
width: 100%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
padding-top:1rem;
animation: showing 0.6s ease;
.input-container {
    width: 80%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 40px;
}

.input-area {
    width: 70%;
    height: 100%;
    input {
        width: 90%;
        height: 90%;
        background-color: #f5f5f5;
        overflow: hidden;
        text-align:center;
        border:none;
    }
}


.img-box {
    width: 15%;
    padding: 20px;
    img {
         width: 60%;
    }
    
}

.canClear {
    width: 10%;
    padding-right: 10px;
    img {
        width: 80%;
    }
}
@keyframes showing {
    from {
        opacity:0;
        /* transform:translateX(100%); */
    }

    to {
        opacity:1;
        /* transform:translateX(0%); */
    }
}
`
export {
    InputStyle
}