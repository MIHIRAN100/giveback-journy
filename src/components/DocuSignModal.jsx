import React, { useState, useRef, useEffect } from 'react';
import './DocuSignModal.css'; // We'll add styles here and in index.css

const DocuSignModal = ({ isOpen, onClose, onSignComplete, defaultName = '', defaultEmail = '' }) => {
    const [step, setStep] = useState(1); // 1: Input details, 2: Loading/Connecting, 3: Document Review, 4: Loading/Finalizing, 5: Signed Success
    const [signerName, setSignerName] = useState(defaultName);
    const [signerEmail, setSignerEmail] = useState(defaultEmail);
    const [signerOrg, setSignerOrg] = useState('');
    const [loadingMessage, setLoadingMessage] = useState('');
    const [signatureAdopted, setSignatureAdopted] = useState(false);
    const [showAdoptModal, setShowAdoptModal] = useState(false);
    const [activeTab, setActiveTab] = useState('style'); // 'style', 'draw'
    const [selectedStyleIndex, setSelectedStyleIndex] = useState(0);
    const [drawnSignatureData, setDrawnSignatureData] = useState(null);
    const [envelopeId, setEnvelopeId] = useState('');

    const canvasRef = useRef(null);
    const isDrawing = useRef(false);

    useEffect(() => {
        if (isOpen) {
            setStep(defaultName && defaultEmail ? 2 : 1);
            setSignatureAdopted(false);
            setDrawnSignatureData(null);
            setShowAdoptModal(false);
            if (defaultName) setSignerName(defaultName);
            if (defaultEmail) setSignerEmail(defaultEmail);
        }
    }, [isOpen, defaultName, defaultEmail]);

    // Handle Connecting Steps
    useEffect(() => {
        if (step === 2) {
            const generateEnvelopeId = () => {
                const chars = '0123456789ABCDEF';
                let id = 'DS-';
                for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * 16)];
                id += '-';
                for (let i = 0; i < 4; i++) id += chars[Math.floor(Math.random() * 16)];
                id += '-4F8A-9A2E-';
                for (let i = 0; i < 12; i++) id += chars[Math.floor(Math.random() * 16)];
                return id;
            };
            setEnvelopeId(generateEnvelopeId());

            setLoadingMessage('Initializing DocuSign Secure Portal...');
            const t1 = setTimeout(() => {
                setLoadingMessage('Establishing 256-bit SSL Handshake with DocuSign Servers...');
            }, 600);
            const t2 = setTimeout(() => {
                setLoadingMessage('Retrieving NDA Legal Documents & Envelope Package...');
            }, 1200);
            const t3 = setTimeout(() => {
                setStep(3);
            }, 1800);

            return () => {
                clearTimeout(t1);
                clearTimeout(t2);
                clearTimeout(t3);
            };
        }
    }, [step]);

    // Canvas Drawing Handlers
    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        
        // Handle touch or mouse
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        ctx.moveTo(clientX - rect.left, clientY - rect.top);
        isDrawing.current = true;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#003366'; // Dark Navy Blue DocuSign ink
    };

    const draw = (e) => {
        if (!isDrawing.current) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const ctx = canvas.getContext('2d');
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        ctx.lineTo(clientX - rect.left, clientY - rect.top);
        ctx.stroke();
    };

    const stopDrawing = () => {
        isDrawing.current = false;
        if (canvasRef.current) {
            setDrawnSignatureData(canvasRef.current.toDataURL());
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setDrawnSignatureData(null);
    };

    const handleStartSigning = (e) => {
        e.preventDefault();
        if (!signerName || !signerEmail) {
            alert('Please provide your name and email to proceed.');
            return;
        }
        setStep(2);
    };

    const handleAdoptSignature = () => {
        if (activeTab === 'draw' && !drawnSignatureData) {
            alert('Please draw your signature first.');
            return;
        }
        setSignatureAdopted(true);
        setShowAdoptModal(false);
    };

    const handleFinishSigning = () => {
        if (!signatureAdopted) {
            alert('Please sign the document before finalizing.');
            return;
        }

        setStep(4);
        setLoadingMessage('Securing Electronic Signature and Hashing Documents...');
        const t1 = setTimeout(() => {
            setLoadingMessage('Generating Digital Security Certificate...');
        }, 800);
        const t2 = setTimeout(() => {
            setLoadingMessage('Registering Completed Envelope in Give Back Journey Ledger...');
        }, 1500);
        const t3 = setTimeout(() => {
            setStep(5);
        }, 2200);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    };

    // Download NDA PDF Simulator
    const downloadNDAPDF = () => {
        const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const htmlContent = `
================================================================================
          DOCUSIGN COMPLETED ENVELOPE: ELECTRONIC NDA RECEIPT
================================================================================
Envelope ID: ${envelopeId}
Timestamp: ${new Date().toLocaleString()}
Signer: ${signerName} (${signerEmail})
Organization: ${signerOrg || 'N/A'}
Status: SECURELY SIGNED & ENCRYPTED
--------------------------------------------------------------------------------

MUTUAL NON-DISCLOSURE AGREEMENT

This Mutual Non-Disclosure Agreement ("Agreement") is entered into by and between 
Give Back Journey (Pvt) Ltd. ("Disclosing Party"), a travel design corporation, 
and ${signerName} ("Receiving Party") as of ${today}.

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
Adopted Signature Font style: Cursive Style ${selectedStyleIndex + 1}
Digital Verification Hash: SHA256-${Math.random().toString(36).substring(2, 15).toUpperCase()}
Signed at IP Address: 184.22.91.${Math.floor(Math.random()*254)}
DocuSign Secure Certificate Authority: Verified

RECEIVING PARTY SIGNATURE (ELECTRONICALLY APPLIED):
[Signed by: ${signerName}]
[Email: ${signerEmail}]
[DocuSign Envelope ID: ${envelopeId}]

DISCLOSING PARTY SIGNATURE:
Give Back Journey (Pvt) Ltd.
Signed by: Mihiran G. (Managing Director)
================================================================================
        `;

        const blob = new Blob([htmlContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `GiveBackJourney_NDA_Completed_${envelopeId.slice(3, 11)}.txt`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleReturn = () => {
        onSignComplete(envelopeId, signerName, new Date().toLocaleDateString());
        onClose();
    };

    if (!isOpen) return null;

    const signatureCursiveStyles = [
        { fontFamily: "'Caveat', cursive", fontStyle: 'italic' },
        { fontFamily: "'Dancing Script', cursive", fontWeight: '700' },
        { fontFamily: "'Pacifico', cursive" },
        { fontFamily: "'Playball', cursive" }
    ];

    return (
        <div className="docusign-modal-overlay">
            <div className="docusign-modal-container">
                {/* Header bar */}
                <div className="docusign-ds-header">
                    <div className="docusign-ds-logo-group">
                        <span className="docusign-ds-icon">DS</span>
                        <span className="docusign-ds-title">DocuSign</span>
                    </div>
                    {step === 3 && (
                        <div className="docusign-ds-actions">
                            <span className="docusign-envelope-badge">Envelope ID: {envelopeId.slice(0, 15)}...</span>
                            <button 
                                className={`docusign-ds-btn ${signatureAdopted ? 'docusign-btn-finish' : 'docusign-btn-disabled'}`}
                                onClick={handleFinishSigning}
                            >
                                FINISH
                            </button>
                        </div>
                    )}
                    <button className="docusign-close-x" onClick={onClose}>&times;</button>
                </div>

                {/* Main Body */}
                <div className="docusign-modal-body">
                    {/* STEP 1: Enter details */}
                    {step === 1 && (
                        <div className="docusign-step-one">
                            <div className="docusign-step-header">
                                <h2>Access Secure Agreement</h2>
                                <p>You must verify your details to review and electronically sign the Mutual Non-Disclosure Agreement (NDA).</p>
                            </div>
                            <form onSubmit={handleStartSigning} className="docusign-intro-form">
                                <div className="ds-form-group">
                                    <label>Full Legal Name *</label>
                                    <input 
                                        type="text" 
                                        required 
                                        placeholder="e.g. Eleanor Vance" 
                                        value={signerName} 
                                        onChange={(e) => setSignerName(e.target.value)} 
                                    />
                                </div>
                                <div className="ds-form-group">
                                    <label>Email Address *</label>
                                    <input 
                                        type="email" 
                                        required 
                                        placeholder="eleanor@example.com" 
                                        value={signerEmail} 
                                        onChange={(e) => setSignerEmail(e.target.value)} 
                                    />
                                </div>
                                <div className="ds-form-group">
                                    <label>Company / Organization (Optional)</label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. Eco-Adventures Ltd." 
                                        value={signerOrg} 
                                        onChange={(e) => setSignerOrg(e.target.value)} 
                                    />
                                </div>
                                <div className="ds-disclosure-notice">
                                    <i className="fa-solid fa-lock"></i>
                                    <span>By proceeding, you agree to DocuSign's electronic signature disclosure and that your signatures will be legally binding.</span>
                                </div>
                                <button type="submit" className="docusign-submit-intro">
                                    Prepare Document <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    )}

                    {/* STEP 2 & 4: Loading Screen */}
                    {(step === 2 || step === 4) && (
                        <div className="docusign-loading-screen">
                            <div className="ds-spinner"></div>
                            <h3>{loadingMessage}</h3>
                            <p className="ds-security-tag"><i className="fa-solid fa-shield-halved"></i> 256-bit Encrypted Connection Active</p>
                        </div>
                    )}

                    {/* STEP 3: Document Review and Signing */}
                    {step === 3 && (
                        <div className="docusign-step-three">
                            <div className="docusign-toolbar-helper">
                                <div className="ds-alert-tip">
                                    <i className="fa-solid fa-circle-info"></i>
                                    <span>Scroll to the bottom of the document and click the <strong>Yellow Signature Indicator</strong> to apply your signature.</span>
                                </div>
                            </div>

                            <div className="docusign-document-viewer">
                                <div className="docusign-paper">
                                    {/* Document Header */}
                                    <div className="ds-doc-header">
                                        <div className="ds-doc-watermark">CONFIDENTIAL</div>
                                        <h1>MUTUAL NON-DISCLOSURE AGREEMENT</h1>
                                        <p className="ds-doc-subtitle">GIVE BACK JOURNEYS INTELLECTUAL PROPERTY & NETWORK PROTECTION</p>
                                    </div>

                                    {/* Document Body */}
                                    <div className="ds-doc-body">
                                        <p>This Mutual Non-Disclosure Agreement (the "Agreement") is entered into on <strong>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong> ("Effective Date"), by and between:</p>
                                        
                                        <p><strong>1. Give Back Journey (Pvt) Ltd.</strong>, having its registered address at No. 45, Peradeniya Road, Kandy, Sri Lanka (hereinafter referred to as the <strong>"Disclosing Party"</strong>), and</p>
                                        
                                        <p><strong>2. {signerName}</strong>, residing at/operating with the email contact <strong>{signerEmail}</strong> {signerOrg ? `and representing ${signerOrg}` : ''} (hereinafter referred to as the <strong>"Receiving Party"</strong>).</p>

                                        <h3>RECITALS</h3>
                                        <p>WHEREAS, the Disclosing Party operates a premium, highly specialized travel agency network in Sri Lanka, coordinating custom tour formulations, village community partnerships, private logistics, and local conservation relationships;</p>
                                        <p>WHEREAS, in connection with organizing, booking, or discussing a high-end volunteer or travel experience, the Disclosing Party may share highly confidential operational details, proprietary pricing matrices, local guide contacts, and sustainable financial allocations;</p>
                                        <p>NOW, THEREFORE, the parties agree to the following strict covenants:</p>

                                        <h4>1. Scope of Confidential Information</h4>
                                        <p>Confidential Information covers all proprietary structures disclosed, including but not limited to:</p>
                                        <ul>
                                            <li><strong>Logistics & Itineraries:</strong> Bespoke scheduling sequences, train ticket reservation channels, private vehicle routing coordinates, and safety protocols.</li>
                                            <li><strong>Guide & Host Networks:</strong> Personal names, contact numbers, homestay details, and direct pricing of local villagers, temple curators, and eco-conservation guides.</li>
                                            <li><strong>Sustainable Finance Model:</strong> The exact ratios and allocation formulas used to distribute profit margins to local communities, schools, and reforestation projects.</li>
                                            <li><strong>Travel Software & Identity:</strong> Custom chat agents, user profile databases, and software layouts developed for Give Back Journey.</li>
                                        </ul>

                                        <h4>2. Obligations of Non-Disclosure</h4>
                                        <p>The Receiving Party shall maintain all Confidential Information in strict confidence and shall not reproduce, distribute, or utilize such information outside the scope of booking a tour with the Disclosing Party. Specifically, the Receiving Party is strictly prohibited from circumventing Give Back Journey (Pvt) Ltd. by directly contacting, booking, or contracting with any local guide, driver, or host network provided during the tour design or booking phase.</p>

                                        <h4>3. Remedies and Penalty</h4>
                                        <p>In the event of a breach of this Agreement, the Receiving Party acknowledges that irreparable damage will occur. Accordingly, the Receiving Party agrees to the immediate payment of **$50,000 USD** in liquidated damages per breach, plus the reimbursement of all legal fees incurred by the Disclosing Party in enforcing this Agreement.</p>

                                        {/* Signature block */}
                                        <div className="ds-signature-block">
                                            <div className="ds-sig-row">
                                                <div className="ds-sig-column">
                                                    <div className="ds-sig-title">DISCLOSING PARTY</div>
                                                    <div className="ds-signature-line disclosing-applied">
                                                        <span className="disclosing-signature">Mihiran G.</span>
                                                        <span className="disclosing-watermark">DocuSign Verified</span>
                                                    </div>
                                                    <div className="ds-sig-meta">
                                                        <p><strong>Name:</strong> Mihiran G.</p>
                                                        <p><strong>Title:</strong> Managing Director</p>
                                                        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                                                    </div>
                                                </div>

                                                <div className="ds-sig-column">
                                                    <div className="ds-sig-title">RECEIVING PARTY</div>
                                                    
                                                    {signatureAdopted ? (
                                                        <div className="ds-signature-line receiving-applied" onClick={() => setShowAdoptModal(true)}>
                                                            {activeTab === 'style' ? (
                                                                <span 
                                                                    style={{
                                                                        fontFamily: signatureCursiveStyles[selectedStyleIndex].fontFamily,
                                                                        fontWeight: signatureCursiveStyles[selectedStyleIndex].fontWeight || 'normal',
                                                                        fontStyle: signatureCursiveStyles[selectedStyleIndex].fontStyle || 'normal',
                                                                        fontSize: '2rem',
                                                                        color: '#003366',
                                                                        display: 'block'
                                                                    }}
                                                                >
                                                                    {signerName}
                                                                </span>
                                                            ) : (
                                                                <img src={drawnSignatureData} alt="Drawn Signature" style={{ maxHeight: '60px', width: 'auto' }} />
                                                            )}
                                                            <div className="ds-secure-stamp">
                                                                <span>DocuSign Verified Certificate</span>
                                                                <span>ID: {envelopeId.slice(3, 18)}</span>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div 
                                                            className="ds-signature-placeholder-btn flashing-sign-btn"
                                                            onClick={() => setShowAdoptModal(true)}
                                                        >
                                                            <div className="yellow-tab-pointer">
                                                                <i className="fa-solid fa-pen-fancy"></i> SIGN HERE
                                                            </div>
                                                            <span className="ds-placeholder-text">Click to electronic sign</span>
                                                        </div>
                                                    )}

                                                    <div className="ds-sig-meta">
                                                        <p><strong>Name:</strong> {signerName}</p>
                                                        <p><strong>Email:</strong> {signerEmail}</p>
                                                        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 5: Success Completed Screen */}
                    {step === 5 && (
                        <div className="docusign-completed-screen">
                            <div className="ds-completed-card">
                                <div className="ds-success-icon-circle">
                                    <i className="fa-solid fa-circle-check"></i>
                                </div>
                                <h2>Envelope Completed Successfully!</h2>
                                <p className="ds-success-desc">
                                    Thank you, <strong>{signerName}</strong>. Your electronic signature has been securely sealed and registered. A digital hash is now embedded in your profile.
                                </p>
                                
                                <div className="ds-completed-meta-box">
                                    <div className="ds-completed-row">
                                        <span className="ds-completed-label">Document:</span>
                                        <span className="ds-completed-val">GiveBackJourneys_NDA_Mutual.pdf</span>
                                    </div>
                                    <div className="ds-completed-row">
                                        <span className="ds-completed-label">Envelope ID:</span>
                                        <span className="ds-completed-val code-font">{envelopeId}</span>
                                    </div>
                                    <div className="ds-completed-row">
                                        <span className="ds-completed-label">Status:</span>
                                        <span className="ds-completed-val status-green">✓ Securely Signed</span>
                                    </div>
                                </div>

                                <div className="ds-download-action">
                                    <button className="ds-download-receipt-btn" onClick={downloadNDAPDF}>
                                        <i className="fa-solid fa-file-arrow-down"></i> Download Completed NDA (.txt)
                                    </button>
                                    <p className="ds-download-subtext">Downloads a certified text transcript of the signed electronic envelope.</p>
                                </div>

                                <button className="ds-return-form-btn" onClick={handleReturn}>
                                    Apply & Return to Form <i className="fa-solid fa-right-to-bracket"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ADOPT SIGNATURE MODAL */}
            {showAdoptModal && (
                <div className="adopt-sig-overlay">
                    <div className="adopt-sig-container">
                        <div className="adopt-sig-header">
                            <h3>Adopt Your Signature</h3>
                            <button className="adopt-sig-close" onClick={() => setShowAdoptModal(false)}>&times;</button>
                        </div>
                        
                        <div className="adopt-sig-tabs">
                            <button 
                                className={`adopt-tab-btn ${activeTab === 'style' ? 'active' : ''}`}
                                onClick={() => setActiveTab('style')}
                            >
                                <i className="fa-solid fa-font"></i> Choose Style
                            </button>
                            <button 
                                className={`adopt-tab-btn ${activeTab === 'draw' ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab('draw');
                                    // Trigger canvas size adjustments if needed after rendering
                                    setTimeout(() => {
                                        const canvas = canvasRef.current;
                                        if (canvas) {
                                            canvas.width = canvas.offsetWidth;
                                            canvas.height = canvas.offsetHeight;
                                            // Draw starting line
                                            const ctx = canvas.getContext('2d');
                                            ctx.strokeStyle = '#eee';
                                            ctx.lineWidth = 1;
                                            ctx.beginPath();
                                            ctx.moveTo(10, canvas.height - 20);
                                            ctx.lineTo(canvas.width - 10, canvas.height - 20);
                                            ctx.stroke();
                                        }
                                    }, 100);
                                }}
                            >
                                <i className="fa-solid fa-signature"></i> Draw Signature
                            </button>
                        </div>

                        <div className="adopt-sig-content">
                            {activeTab === 'style' && (
                                <div className="styles-chooser-grid">
                                    {signatureCursiveStyles.map((style, idx) => (
                                        <div 
                                            key={idx}
                                            className={`style-card-option ${selectedStyleIndex === idx ? 'selected' : ''}`}
                                            onClick={() => setSelectedStyleIndex(idx)}
                                        >
                                            <div className="style-option-label">Style {idx + 1}</div>
                                            <div className="style-option-preview" style={style}>
                                                {signerName || 'Signature'}
                                            </div>
                                            <div className="style-option-selected-dot"></div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'draw' && (
                                <div className="drawing-pad-container">
                                    <div className="drawing-pad-wrapper">
                                        <canvas 
                                            ref={canvasRef}
                                            className="drawing-canvas-element"
                                            onMouseDown={startDrawing}
                                            onMouseMove={draw}
                                            onMouseUp={stopDrawing}
                                            onMouseLeave={stopDrawing}
                                            onTouchStart={startDrawing}
                                            onTouchMove={draw}
                                            onTouchEnd={stopDrawing}
                                        />
                                    </div>
                                    <button type="button" className="clear-pad-btn" onClick={clearCanvas}>
                                        <i className="fa-solid fa-eraser"></i> Clear Drawing
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="adopt-disclosure">
                            By clicking <strong>Adopt and Sign</strong>, I agree that the electronic signature and initials applied here shall be the legally binding electronic representation of my hand-written signature for all purposes on this website.
                        </div>

                        <div className="adopt-sig-footer">
                            <button className="adopt-cancel-btn" onClick={() => setShowAdoptModal(false)}>Cancel</button>
                            <button className="adopt-submit-btn" onClick={handleAdoptSignature}>Adopt and Sign</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DocuSignModal;
