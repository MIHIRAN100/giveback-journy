import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [profile, setProfile] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchProfile = async (userId) => {
        if (!userId) {
            setProfile(null);
            setIsAdmin(false);
            return;
        }
        try {
            const { data } = await supabase.from('profiles').select('*').eq('id', userId).single();
            setProfile(data);
            setIsAdmin(data?.is_admin || false);
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setUser(session?.user ?? null);
            fetchProfile(session?.user?.id).then(() => setLoading(false));
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            fetchProfile(session?.user?.id).then(() => setLoading(false));
        });

        return () => subscription.unsubscribe();
    }, []);

    // Signup function
    const signUp = async (email, password, fullName) => {
        return supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                }
            }
        });
    };

    // Login function
    const logIn = async (email, password) => {
        return supabase.auth.signInWithPassword({
            email,
            password,
        });
    };

    // Logout function
    const logOut = async () => {
        return supabase.auth.signOut();
    };

    // Password reset
    const resetPassword = async (email) => {
        return supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`,
        });
    };

    // Update password
    const updatePassword = async (newPassword) => {
        return supabase.auth.updateUser({ password: newPassword });
    };

    const value = {
        session,
        user,
        profile,
        isAdmin,
        signUp,
        logIn,
        logOut,
        resetPassword,
        updatePassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
