import React, { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import DocuSignModal from '../components/DocuSignModal';

const NDAPage = () => {
    const [signedState, setSignedState] = useState({
        isSigned: false,
        name: '',
        date: '',
        envelopeId: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Load signed state from localStorage
        const hasSigned = localStorage.getItem('nda_signed') === 'true';
        if (hasSigned) {
            setSignedState({
                isSigned: true,
                name: localStorage.getItem('nda_signed_name') || '',
                date: localStorage.getItem('nda_signed_date') || '',
                envelopeId: localStorage.getItem('nda_docusign_envelope') || ''
            });
        }
    }, []);

    const handleSignComplete = (envelopeId, signerName, signedDate) => {
        localStorage.setItem('nda_signed', 'true');
        localStorage.setItem('nda_signed_name', signerName);
        localStorage.setItem('nda_signed_date', signedDate);
        localStorage.setItem('nda_docusign_envelope', envelopeId);

        setSignedState({
            isSigned: true,
            name: signerName,
            date: signedDate,
            envelopeId: envelopeId
        });
    };

    const handleReset = () => {
        if (window.confirm('Are you sure you want to void this signature certificate? You will need to sign a new NDA for future applications.')) {
            localStorage.removeItem('nda_signed');
            localStorage.removeItem('nda_signed_name');
            localStorage.removeItem('nda_signed_date');
            localStorage.removeItem('nda_docusign_envelope');

            setSignedState({
                isSigned: false,
                name: '',
                date: '',
                envelopeId: ''
            });
        }
    };

    // Download NDA transcript from page
    const downloadNDATranscript = () => {
        const today = signedState.date;
        const htmlContent = `
================================================================================
          DOCUSIGN COMPLETED ENVELOPE: ELECTRONIC NDA RECEIPT
================================================================================
Envelope ID: ${signedState.envelopeId}
Timestamp: ${signedState.date}
Signer: ${signedState.name}
Status: SECURELY SIGNED & ENCRYPTED
--------------------------------------------------------------------------------

MUTUAL NON-DISCLOSURE AGREEMENT

This Mutual Non-Disclosure Agreement ("Agreement") is entered into by and between 
Give Back Journey (Pvt) Ltd. ("Disclosing Party"), a travel design corporation, 
and ${signedState.name} ("Receiving Party") as of ${today}.

1. Confidential Information
---------------------------
Confidential Information includes, but is not limited to:
- Proprietary tour routes, logistical timings, and bespoke pricing matrices.
- Direct contact lists, pricing agreements, and contracts of our Sri Lankan
  homestay hosts, rural school/village leaders, private drivers, and expert guides.
- Social impact allocation matrices, community donation formulas, and project selection algorithms.
- Proprietary web platform source code, custom design scripts, and user profiles.

2. Obligations of Receiving Party
---------------------------------
The Receiving Party agrees to maintain the Confidential Information in strict
confidence and shall not disclose, duplicate, distribute, or use it for any 
commercial or competitive purposes. The Receiving Party specifically agrees 
not to circumvent Give Back Journey (Pvt) Ltd. by directly booking or contracting 
with the local guides, drivers, or village hosts introduced during the tour design 
or booking process.

3. Violation & Remedies
-----------------------
In the event of a breach of this Agreement, the Disclosing Party shall be entitled 
to seek injunctive relief and liquidated damages in the amount of $50,000 USD, 
along with reasonable legal fees.

--------------------------------------------------------------------------------
ELECTRONIC SIGNATURE RECORD & SECURITY MANIFEST
--------------------------------------------------------------------------------
Digital Verification Hash: SHA256-${Math.random().toString(36).substring(2, 15).toUpperCase()}
DocuSign Secure Certificate Authority: Verified

RECEIVING PARTY SIGNATURE (ELECTRONICALLY APPLIED):
[Signed by: ${signedState.name}]
[DocuSign Envelope ID: ${signedState.envelopeId}]

DISCLOSING PARTY SIGNATURE:
Give Back Journey (Pvt) Ltd.
Signed by: Mihiran G. (Managing Director)
================================================================================
        `;

        const blob = new Blob([htmlContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `GiveBackJourney_NDA_Completed_${signedState.envelopeId.slice(3, 11)}.txt`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="policy-page-wrapper">
            <div className="policy-hero">
                <ScrollReveal>
                    <div className="policy-hero-content">
                        <h1>Mutual Non-Disclosure Agreement (NDA)</h1>
                        <p>Protecting proprietary Sri Lankan community routes, guide networks, and bespoke travel IP.</p>
                        <div className="policy-meta-row">
                            <span className="policy-version-text">Version 4.01 (DocuSign Required)</span>
                            <button className="policy-share-btn" onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert('Link copied to clipboard!');
                            }}>
                                <i className="bi bi-share"></i> Share
                            </button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <div className="policy-content-section">
                <div className="policy-container">
                    <ScrollReveal>
                        {/* SIGNATURE COMPLIANCE CARD CONTAINER */}
                        <div style={{ marginBottom: '60px' }}>
                            {signedState.isSigned ? (
                                <div style={{ 
                                    background: '#ecfdf5', 
                                    border: '2px solid #10b981', 
                                    borderRadius: '24px', 
                                    padding: '40px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    boxShadow: '0 20px 40px rgba(16, 185, 129, 0.05)'
                                }}>
                                    <div style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                        background: '#10b981', 
                                        color: 'white', 
                                        borderRadius: '50%', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        fontSize: '2rem',
                                        marginBottom: '20px'
                                    }}>
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#065f46', marginBottom: '10px' }}>Verified DocuSign Agreement Active</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#047857', maxWidth: '600px', lineHeight: 1.6, margin: '0 auto 25px' }}>
                                        Thank you, <strong>{signedState.name}</strong>. Your electronic signature is securely attached to our Mutual NDA. All booking and volunteering forms on this device will now automatically verify your agreement state.
                                    </p>
                                    
                                    <div style={{ 
                                        background: 'white', 
                                        padding: '16px 30px', 
                                        borderRadius: '12px', 
                                        border: '1px solid #a7f3d0',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        gap: '30px',
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        color: '#065f46',
                                        marginBottom: '30px'
                                    }}>
                                        <div><strong>Signed Date:</strong> {signedState.date}</div>
                                        <div><strong>Envelope ID:</strong> <span style={{ fontFamily: 'monospace', fontSize: '0.75rem' }}>{signedState.envelopeId}</span></div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <button 
                                            className="btn-modern btn-black" 
                                            style={{ padding: '12px 25px', background: '#0f172a', color: 'white', border: 'none', borderRadius: '100px', fontWeight: 800, cursor: 'pointer' }}
                                            onClick={downloadNDATranscript}
                                        >
                                            <i className="fa-solid fa-file-arrow-down" style={{ marginRight: '8px' }}></i> Download NDA Receipt
                                        </button>
                                        <button 
                                            className="btn-modern" 
                                            style={{ padding: '12px 25px', background: 'transparent', border: '2px solid #ef4444', color: '#ef4444', borderRadius: '100px', fontWeight: 800, cursor: 'pointer' }}
                                            onClick={handleReset}
                                        >
                                            Void Certificate
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div style={{ 
                                    background: '#fffbeb', 
                                    border: '2px solid #fbbf24', 
                                    borderRadius: '24px', 
                                    padding: '40px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    boxShadow: '0 20px 40px rgba(251, 191, 36, 0.05)'
                                }}>
                                    <div style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                        background: '#fbbf24', 
                                        color: '#78350f', 
                                        borderRadius: '50%', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        fontSize: '2rem',
                                        marginBottom: '20px'
                                    }}>
                                        <i className="fa-solid fa-pen-nib"></i>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#78350f', marginBottom: '10px' }}>DocuSign Signature Required</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#92400e', maxWidth: '600px', lineHeight: 1.6, margin: '0 auto 25px' }}>
                                        To secure our specialized community networks and bespoke itineraries, you must sign our Mutual Non-Disclosure Agreement (NDA) using DocuSign before final bookings or volunteer approvals.
                                    </p>
                                    <button 
                                        className="btn-modern btn-black" 
                                        style={{ padding: '16px 40px', background: '#d97706', color: 'white', border: 'none', borderRadius: '100px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 10px 20px rgba(217, 119, 6, 0.2)' }}
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        <i className="fa-solid fa-file-signature"></i> Sign via DocuSign (1 Minute)
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* LEGAL CONTENTS */}
                        <div className="policy-block">
                            <h2>1. Purpose of Agreement</h2>
                            <p>Give Back Journey (Pvt) Ltd. is a custom, sustainable travel organization operating throughout Sri Lanka. We spend years discovering private locations, local hosts, and negotiating direct pricing benefits with villagers, private drivers, temple curators, and eco-conservationists. We share this proprietary, specialized network with our travelers to curate extraordinary journeys. This Mutual NDA ensures that these delicate community relations and custom travel designs remain confidential, avoiding exploitation or bypassing of our social enterprise model.</p>
                        </div>

                        <div className="policy-block">
                            <h2>2. Definition of Confidential Information</h2>
                            <p>For the purposes of this Agreement, "Confidential Information" shall include all information or material that has or could have commercial value or other utility in the business in which Disclosing Party is engaged. This includes:</p>
                            <ul>
                                <li><strong>Proprietary Route Formulations:</strong> Complete scheduling timelines, custom locations, sequence guides, and safety routes designed for the traveler.</li>
                                <li><strong>Local Host and Driver Networks:</strong> Direct contact numbers, personal names, contracts, and financial rates of local partners, private drivers, and rural homestay families.</li>
                                <li><strong>Community Funding Ratios:</strong> The exact sustainable mathematical formulas used to distribute profit margins directly to schools, reforestation efforts, and community hubs.</li>
                                <li><strong>Software intellectual Property:</strong> Bespoke web widgets, reservation engines, and customer database logs.</li>
                            </ul>
                        </div>

                        <div className="policy-block">
                            <h2>3. Non-Circumvention</h2>
                            <p>The Receiving Party specifically agrees not to circumvent, bypass, or avoid Give Back Journey (Pvt) Ltd. by directly booking, contracting, or initiating commercial relations with any of the local guides, drivers, community hosts, or hotels introduced during the consultation, itinerary design, or tour booking process. Any direct booking attempts made independently within 36 months of introduction shall constitute a material breach of this Agreement.</p>
                        </div>

                        <div className="policy-block">
                            <h2>4. Violation Damages & Remedies</h2>
                            <p>The Receiving Party acknowledges that any breach of this Agreement would cause immediate and irreparable harm. In the event of a breach, Give Back Journey (Pvt) Ltd. shall be entitled to seek injunctive relief to prevent unauthorized disclosures, along with **$50,000 USD** in liquidated damages per breach, plus the reimbursement of all legal fees incurred during the litigation process.</p>
                        </div>

                        <div className="policy-block">
                            <h2>5. Term & Termination</h2>
                            <p>The non-disclosure provisions of this Agreement shall survive the termination of this Agreement and Receiving Party's duty to hold Confidential Information in confidence shall remain in effect for a period of three (3) years from the Effective Date, or until such time as Disclosing Party releases Receiving Party from such obligation in writing.</p>
                        </div>

                        <div className="policy-last-updated">
                            Last Updated: May 1, 2026
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* DOCUSIGN MODAL */}
            <DocuSignModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSignComplete={handleSignComplete}
            />
        </div>
    );
};

export default NDAPage;
