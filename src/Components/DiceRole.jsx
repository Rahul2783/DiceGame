import styled from "styled-components"
import { motion } from "framer-motion"

const DiceRole = ({ currentDice, roleDice }) => {
    const diceVariants = {
        initial: { scale: 1, rotate: 0 },
        clicked: {
            scale: [1, 1.5, 1],
            rotate: [0,360,0],
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            }
        }
    };

    const handleClick = () => {
        roleDice();
    };

    return (
        <DiceContainer>
            <motion.div 
                className="dice" 
                variants={diceVariants}
                initial="initial"
                whileTap="clicked"
                onClick={handleClick}
            >
                <img src={`/images/dice_${currentDice}.png`} alt="" />
            </motion.div>
            <p>Click on Dice to Roll</p>
        </DiceContainer>
    );
};

export default DiceRole

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .dice {
        cursor: pointer;
    }
    
    p {
        font-size: 24px;
    }
`;