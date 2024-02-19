import React, { useState } from 'react'

type ToggleProps = {
    isEditing: boolean;
    setIsEditing: React.Dispatch<React.SetStateAction<number | null>>;
    toggleEditMode: () => void;
};

const useToggleInputs = ():ToggleProps => {
    const [isEditing, setIsEditing] = useState<number | null>(null);

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    }
 
  return (
    {isEditing,
    setIsEditing,
    toggleEditMode
    }
  )
}

export default useToggleInputs