import { XCircle, Check } from "phosphor-react";

interface PurchaseModalProps {
  closeModal: (condition: boolean) => void;
}

export const PurchaseModal = ({ closeModal }: PurchaseModalProps) => {
  return (
    <div className="bg-white rounded-lg p-4 relative">
      <XCircle
        size={26}
        className="absolute right-2 cursor-pointer active:scale-90"
        onClick={() => closeModal(false)}
      />
      <div className="flex items-center justify-center gap-2 mt-8">
        <Check size={26} />
        <span>Compra finalizada com sucesso!</span>
      </div>
    </div>
  );
};
