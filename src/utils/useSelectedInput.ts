import { useState } from 'react';

type SelectedInputProps = {
    selectedInputId: number | null;
    setSelectedInputId: React.Dispatch<React.SetStateAction<number | null>>;
    toggleInput: (id: number | null | undefined) => void; // Include toggleInput in the type definition
};

const useSelectedInput = (): SelectedInputProps => {
    const [selectedInputId, setSelectedInputId] = useState<number | null>(null);

    const toggleInput = (id: number | null | undefined) => {
        setSelectedInputId(prevId => {
            // If prevId is null or undefined, return id
            if (id === undefined) {
                return null;
              }
              // Toggle between null and id
              return prevId === id ? null : id;
            });
          };

    return {
        selectedInputId,
        setSelectedInputId,
        toggleInput
    };
};

export default useSelectedInput;