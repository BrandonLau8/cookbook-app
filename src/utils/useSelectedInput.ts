import { useState } from 'react';

type SelectedInputProps = {
    selectedInputId: number | null;
    setSelectedInputId: React.Dispatch<React.SetStateAction<number | null>>;
    toggleInput: (id: number) => void; // Include toggleInput in the type definition
};

const useSelectedInput = (): SelectedInputProps => {
    const [selectedInputId, setSelectedInputId] = useState<number | null>(null);

    const toggleInput = (id: number) => {
        setSelectedInputId(prevId => (prevId === id ? null : id)); // Toggle the selected input
    };

    return {
        selectedInputId,
        setSelectedInputId,
        toggleInput
    };
};

export default useSelectedInput;