'use client' // for Next.js app router
import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit'

    const handleVerify = async (proof: ISuccessResult) => {
    const res = await fetch("/api/verify", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(proof),
    })
    if (!res.ok) {
        throw new Error("Verification failed."); 
    }
    };

    const onSuccess = () => {
    
    window.location.href = "/success";
    };


        <IDKitWidget
              app_id="app_staging_d09ea07388451826faef5341f5561f5c"
              action="your action id" 
              onSuccess={onSuccess} 
              handleVerify={handleVerify} 
              verification_level={VerificationLevel.Orb}
            >
              {({ open }) =>
                    <button onClick={open}>Verify with World ID</button>
                }
        </IDKitWidget>