
export const phoneMask = (value: any) => {
    const maskedPhone = value.replace(/\D/g, '');
  
    const maskedPhoneOK = maskedPhone.replace(
      /(\d{2})(\d{1})(\d{1,4})(\d{1,4})/g,
      '($1) $2 $3 $4'
    );
  
    return maskedPhoneOK;
  };