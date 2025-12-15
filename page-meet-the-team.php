<?php
/*
Template Name: Meet the Team
Description: Professional team showcase with video background
*/
get_header();
?>

<!-- TEAM SECTION WITH VIDEO BACKGROUND -->
<section class="team-section">
    <!-- Enhanced video background with professional overlay -->
    <video autoplay loop muted playsinline class="video-background">
        <source src="<?php echo get_template_directory_uri(); ?>/assets/images/zaman capital video.mp4" type="video/mp4">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/zaman capital video.mp4" alt="Team Background">
    </video>
    
    <!-- Professional overlay for better text readability -->
    <div class="video-overlay"></div>

    <!-- MAIN CONTENT CONTAINER -->
    <div class="team-container">
        
        <!-- Enhanced hero section with professional styling -->
        <div class="team-hero">
            <h1 class="team-page-title">Meet Our Leadership Team</h1>
            <p class="team-page-subtitle">Guided by integrity, driven by innovation — the minds shaping Zaman Capital Group.</p>
            <div class="hero-divider"></div>
        </div>

        <!-- TEAM MEMBERS GRID -->
        <div class="team-members-wrapper">

            <!-- TEAM MEMBER 1: Joseph Fiocco -->
            <div class="team-member-card">
                <div class="member-image-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/team1.avif" alt="Joseph Fiocco, Esq.">
                    <div class="member-overlay">
                        <span class="member-role-badge">Legal & Financial Due Diligence</span>
                    </div>
                </div>
                <div class="member-content">
                    <h2 class="member-name">Joseph Fiocco, Esq.</h2>
                    <p class="member-title">Legal and Financial Due Diligence</p>
                    
                    <div class="member-bio">
                        <p>Joe is a Corporate and M&A attorney who ensures that every acquisition at Zaman Capital Group is legally sound, financially optimized, and risk-mitigated. His sharp legal expertise and strategic deal structuring give investors bulletproof transactions.</p>
                        
                        <p>With a background in high-stakes corporate law, Joe specializes in contracts, due diligence, and financial structuring—ensuring that every deal is built for long-term success. Selected as a 2025 Rising Star by Maryland Super Lawyers Magazine, Joe's meticulous attention to legal and financial details allows Zaman Capital Group to navigate complex transactions with confidence.</p>
                        
                        <p>Joe thrives at the intersection of legal risk management and wealth-building strategy, protecting investor interests while positioning deals for maximum profitability.</p>
                    </div>
                    
                    <div class="member-expertise">
                        <strong>Expertise:</strong>
                        <div class="expertise-tags">
                            <span class="expertise-tag">Legal</span>
                            <span class="expertise-tag">Due Diligence</span>
                            <span class="expertise-tag">Financials</span>
                            <span class="expertise-tag">Risk Mitigation</span>
                            <span class="expertise-tag">Investor Protection</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- TEAM MEMBER 2: Nashra Zaman -->
            <div class="team-member-card">
                <div class="member-image-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/team 2.jpg" alt="Nashra Zaman">
                    <div class="member-overlay">
                        <span class="member-role-badge">Acquisitions & Growth Strategy</span>
                    </div>
                </div>
                <div class="member-content">
                    <h2 class="member-name">Nashra Zaman</h2>
                    <p class="member-title">Acquisitions, Growth and Strategy</p>
                    
                    <div class="member-bio">
                        <p>Nashra is a visionary real estate investor who has successfully scaled a diversified portfolio across multifamily, single-family, and short-term rentals since 2020. She leads deal sourcing, acquisitions, and strategic growth for Zaman Capital Group, ensuring strong returns and long-term value creation for investors.</p>
                        
                        <p>With a background in project management at industry giants, Nashra brings a data-driven, analytical approach to real estate investing. Her ability to identify undervalued assets, optimize operations, and execute high-yield strategies makes her a trusted partner for investors seeking sustainable growth.</p>
                        
                        <p>Known for her sharp negotiation skills and relentless execution, Nashra thrives in high-stakes dealmaking. She transforms properties into high-performing assets while maintaining a proactive investor-first approach.</p>
                    </div>
                    
                    <div class="member-expertise">
                        <strong>Expertise:</strong>
                        <div class="expertise-tags">
                            <span class="expertise-tag">Acquisitions</span>
                            <span class="expertise-tag">Deal Sourcing</span>
                            <span class="expertise-tag">Investor Strategy</span>
                            <span class="expertise-tag">Portfolio Growth</span>
                            <span class="expertise-tag">Negotiations</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- TEAM MEMBER 3: Areeb Uzzaman -->
            <div class="team-member-card">
                <div class="member-image-container">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/team 3.png" alt="Areeb Uzzaman">
                    <div class="member-overlay">
                        <span class="member-role-badge">Acquisitions Associate</span>
                    </div>
                </div>
                <div class="member-content">
                    <h2 class="member-name">Areeb Uzzaman</h2>
                    <p class="member-title">Acquisitions, Growth and Strategy</p>
                    
                    <div class="member-bio">
                        <p>Areeb is an Acquisitions Associate at Zaman Capital Group, where he plays a key role in shaping the firm's investment strategy and growing its portfolio. He works directly with the principals to identify, underwrite, and execute value-add multifamily opportunities, providing a data-driven foundation for each deal.</p>
                        
                        <p>Pursuing a Master of Public Affairs from Brown University, Areeb brings a sophisticated, research-based perspective to the investment process. He specializes in detailed analysis critical to successful deals—including financial modeling, underwriting, and comprehensive market and demographic research.</p>
                        
                        <p>Known for his accuracy, Areeb manages the complex due diligence process for the firm, offering the analytical clarity needed for principals to make confident, data-backed investment decisions and ensuring a smooth transaction from initial offer to closing.</p>
                    </div>
                    
                    <div class="member-expertise">
                        <strong>Expertise:</strong>
                        <div class="expertise-tags">
                            <span class="expertise-tag">Market Research</span>
                            <span class="expertise-tag">Financial Modeling</span>
                            <span class="expertise-tag">Underwriting</span>
                            <span class="expertise-tag">Due Diligence</span>
                            <span class="expertise-tag">Data Analysis</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Added professional CTA section -->
        <div class="team-cta-section">
            <h3>Ready to Partner with Our Team?</h3>
            <p>Connect with our leadership to discuss your investment opportunities.</p>
            <a href="<?php echo home_url('/contact'); ?>" class="cta-button">Schedule a Consultation</a>
        </div>

    </div>
</section>

<?php get_footer(); ?>
