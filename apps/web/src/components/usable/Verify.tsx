'use client';

import {
  IDKitWidget,
  ISuccessResult,
  VerificationLevel,
} from '@worldcoin/idkit';

export const IDKitVerification = () => {
  const handleVerify = async (proof: ISuccessResult) => {
    const res = await fetch('/api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proof),
    });

    if (!res.ok) {
      throw new Error('Verification failed.');
    }
  };

  const onSuccess = () => {
    window.location.href = '/success';
  };

  return (
    <IDKitWidget
      app_id="app_staging_d09ea07388451826faef5341f5561f5c"
      action="login-action"
      onSuccess={onSuccess}
      handleVerify={handleVerify}
      verification_level={VerificationLevel.Device}
    >
      {({ open }) => (
        <button
          onClick={open}
          className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
        >
          Login
        </button>
      )}
    </IDKitWidget>
  );
};
