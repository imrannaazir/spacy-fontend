import React from 'react';

const FeturedRocket = () => {
    return (
        <>
            <h1 className='text-3xl font-semibold  text-primary text-center mb-12'>Meet New Shepard
            </h1>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row gap-20">
                    <img src="https://d3ezn0y6hdgq62.cloudfront.net/newshepard-specs1.png" class="max-w-sm " alt='' />
                    <div className='flex flex-col gap-12 max-w-sm'>
                        <div>
                            <h1 class="text-2xl font-bold font-[Courgette] text-primary">Crew Capsule
                            </h1>
                            <p class="py-6">Pressurized crew capsule environmentally controlled for comfort with room for six and the largest windows to have flown in space.

                            </p>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold  font-[Courgette] text-primary">Ring & Wedge Fins
                            </h1>
                            <p class="py-6">Aerodynamically designed to stabilize the booster and reduce fuel use on its flight back to Earth.

                            </p>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold  font-[Courgette] text-primary">Drag Brakes
                            </h1>
                            <p class="py-6">Deploy from the ring fin to reduce the booster's speed by half on its descent from space.

                            </p>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold  font-[Courgette] text-primary">Engine</h1>
                            <p class="py-6">The BE-3 (Blue Engine 3) propels the rocket to space and restarts for a controlled pinpoint landing on the pad. The uniquely throttleable engine slows the booster down to just 8 km/h (5 mph) for landing.

                            </p>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold  font-[Courgette] text-primary">Aft Fins
                            </h1>
                            <p class="py-6">Stabilize the vehicle during ascent, steer it back to the landing pad on descent, and guide the rocket through airspeeds of up to Mach 4.

                            </p>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold  font-[Courgette] text-primary">Landing Gear

                            </h1>
                            <p class="py-6">All rockets take off, not all rockets land. As a fully reusable rocket, the New Shepard booster uses landing gear that deploys for touchdown.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeturedRocket;