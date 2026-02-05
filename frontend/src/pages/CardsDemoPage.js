import React from "react";
import Card, { ImageHoverCard, SlideRevealCard, StatsCard, FlipCard, GlassHoverCard } from "../components/Card";

// Demo icons
const Icons = {
  Chart: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  Heart: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Star: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
};

export default function CardsDemoPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-text mb-8">Hover Reveal Cards</h1>
        
        {/* Base Cards with different hover effects */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-400 mb-6">Base Cards with Hover Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card 
              title="Lift Effect" 
              hoverEffect="lift"
              revealContent={<p className="text-gray-300">Additional content reveals on hover!</p>}
              icon={<Icons.Chart />}
            >
              <p className="text-gray-400">Base card with lift animation.</p>
            </Card>
            
            <Card 
              title="Scale Effect" 
              hoverEffect="scale"
              revealContent={<p className="text-gray-300">Scales up beautifully!</p>}
              icon={<Icons.Users />}
            >
              <p className="text-gray-400">Card that scales on hover.</p>
            </Card>
            
            <Card 
              title="Glow Effect" 
              hoverEffect="glow"
              revealContent={<p className="text-gray-300">Glows with blue light!</p>}
              icon={<Icons.Heart />}
            >
              <p className="text-gray-400">Card with ambient glow.</p>
            </Card>
            
            <Card 
              title="Gradient" 
              hoverEffect="lift"
              gradient
              revealContent={<p className="text-gray-300">Beautiful gradient overlay!</p>}
              icon={<Icons.Star />}
            >
              <p className="text-gray-400">Card with gradient reveal.</p>
            </Card>
          </div>
        </section>

        {/* Image Hover Cards */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-400 mb-6">Image Overlay Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ImageHoverCard
              image="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400"
              title="Medical Research"
              description="Advanced healthcare research and development."
              overlayContent={
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-sm font-medium transition-colors">
                  Explore Research
                </button>
              }
            />
            
            <ImageHoverCard
              image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400"
              title="Patient Care"
              description="Compassionate care for all patients."
              overlayContent={
                <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white text-sm font-medium transition-colors">
                  View Services
                </button>
              }
            />
            
            <ImageHoverCard
              image="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400"
              title="Technology"
              description="AI-powered medical solutions."
              overlayContent={
                <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-white text-sm font-medium transition-colors">
                  Discover Tech
                </button>
              }
            />
          </div>
        </section>

        {/* Stats Cards */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-400 mb-6">Stats Cards with Animated Counters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard 
              value={1234} 
              label="Total Patients" 
              icon={Icons.Users}
              trend={12}
            />
            <StatsCard 
              value={567} 
              label="Appointments" 
              icon={Icons.Chart}
              trend={-5}
            />
            <StatsCard 
              value={89} 
              label="Success Rate" 
              icon={Icons.Heart}
              trend={8}
            />
            <StatsCard 
              value={456} 
              label="Team Members" 
              icon={Icons.Star}
              trend={3}
            />
          </div>
        </section>

        {/* Slide Reveal Cards */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-400 mb-6">Slide Reveal Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-64">
              <SlideRevealCard
                frontContent={
                  <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                    <Icons.Chart />
                    <h3 className="text-xl font-bold mt-4">Up Slide</h3>
                    <p className="text-gray-400 mt-2">Hover to reveal</p>
                  </div>
                }
                revealContent={
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-2">New Content!</h4>
                    <p className="text-sm opacity-80">This content slides up on hover.</p>
                  </div>
                }
                direction="up"
              />
            </div>
            
            <div className="h-64">
              <SlideRevealCard
                frontContent={
                  <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                    <Icons.Users />
                    <h3 className="text-xl font-bold mt-4">Right Slide</h3>
                    <p className="text-gray-400 mt-2">Hover to reveal</p>
                  </div>
                }
                revealContent={
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-2">Great!</h4>
                    <p className="text-sm opacity-80">Content slides from the right.</p>
                  </div>
                }
                direction="right"
              />
            </div>
            
            <div className="h-64">
              <SlideRevealCard
                frontContent={
                  <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                    <Icons.Heart />
                    <h3 className="text-xl font-bold mt-4">Down Slide</h3>
                    <p className="text-gray-400 mt-2">Hover to reveal</p>
                  </div>
                }
                revealContent={
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-2">Amazing!</h4>
                    <p className="text-sm opacity-80">Content slides down on hover.</p>
                  </div>
                }
                direction="down"
              />
            </div>
          </div>
        </section>

        {/* Flip Cards */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-400 mb-6">3D Flip Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FlipCard
              frontContent={
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                    <Icons.Chart />
                  </div>
                  <h3 className="text-xl font-bold">Analytics</h3>
                  <p className="text-gray-400 mt-2">Hover to flip</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <p className="text-lg font-medium mb-4">Real-time analytics powered by AI</p>
                  <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm font-medium transition-colors">
                    View Dashboard
                  </button>
                </div>
              }
            />
            
            <FlipCard
              frontContent={
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <Icons.Users />
                  </div>
                  <h3 className="text-xl font-bold">Patients</h3>
                  <p className="text-gray-400 mt-2">Hover to flip</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <p className="text-lg font-medium mb-4">Manage patient records securely</p>
                  <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm font-medium transition-colors">
                    Open Records
                  </button>
                </div>
              }
            />
            
            <FlipCard
              frontContent={
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                    <Icons.Heart />
                  </div>
                  <h3 className="text-xl font-bold">Health</h3>
                  <p className="text-gray-400 mt-2">Hover to flip</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <p className="text-lg font-medium mb-4">Monitor health metrics in real-time</p>
                  <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-sm font-medium transition-colors">
                    View Metrics
                  </button>
                </div>
              }
            />
          </div>
        </section>

        {/* Glass Morphism Cards */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-400 mb-6">Glass Morphism Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassHoverCard
              title="Analytics Pro"
              description="Advanced analytics dashboard with real-time data visualization and AI-powered insights."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100"
            />
            
            <GlassHoverCard
              title="Patient Hub"
              description="Complete patient management system with appointment scheduling and health tracking."
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=100"
            />
            
            <GlassHoverCard
              title="AI Assistant"
              description="Intelligent virtual assistant for healthcare professionals and patients."
              image="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=100"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
