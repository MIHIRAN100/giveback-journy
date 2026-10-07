import re

def modify_file(filepath):
    with open(filepath, "r") as f:
        content = f.read()

    button_str = r"""<button 
                        type="submit" 
                        disabled=\{isSubmitting\}
                        style=\{\{
                            width: '100%',
                            marginTop: '10px',
                            padding: '18px',
                            background: isSubmitting \? '#ccc' : 'var\(--primary-green\)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '15px',
                            fontSize: '1\.1rem',
                            fontWeight: 800,
                            cursor: isSubmitting \? 'not-allowed' : 'pointer',
                            transition: 'all 0\.3s ease',
                            boxShadow: '0 10px 20px rgba\(27, 163, 82, 0\.2\)'
                        \}\}
                    >
                        \{isSubmitting \? 'Processing\.\.\.' : 'Complete Booking'\}
                    </button>"""

    new_button_str = """{!user ? (
                        <button 
                            type="button" 
                            onClick={() => navigate('/login')}
                            style={{
                                width: '100%',
                                marginTop: '10px',
                                padding: '18px',
                                background: 'var(--primary-green)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '15px',
                                fontSize: '1.1rem',
                                fontWeight: 800,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 10px 20px rgba(27, 163, 82, 0.2)'
                            }}
                        >
                            Log In or Sign Up to Book
                        </button>
                    ) : (
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            style={{
                                width: '100%',
                                marginTop: '10px',
                                padding: '18px',
                                background: isSubmitting ? '#ccc' : 'var(--primary-green)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '15px',
                                fontSize: '1.1rem',
                                fontWeight: 800,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 10px 20px rgba(27, 163, 82, 0.2)'
                            }}
                        >
                            {isSubmitting ? 'Processing...' : 'Complete Booking'}
                        </button>
                    )}"""
    
    content = re.sub(button_str, new_button_str, content)
    
    with open(filepath, "w") as f:
        f.write(content)

modify_file("src/pages/BookingPage.jsx")
modify_file("src/pages/VolunteerInquiryPage.jsx")
modify_file("src/pages/BookingInquiryPage.jsx")
