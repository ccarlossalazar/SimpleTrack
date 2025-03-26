const people = [
    {
      name: 'yuh',
      role: 'Manager',
      imageUrl: 'https://e7.pngegg.com/pngimages/791/512/png-clipart-user-profile-computer-icons-internet-bot-others-miscellaneous-monochrome.png'
    },
    {
        name: 'Mills Gonzalez',
        role: 'Bot',
        imageUrl:
          'https://e7.pngegg.com/pngimages/791/512/png-clipart-user-profile-computer-icons-internet-bot-others-miscellaneous-monochrome.png',
      },    {
        name: 'Los Salazar',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://e7.pngegg.com/pngimages/791/512/png-clipart-user-profile-computer-icons-internet-bot-others-miscellaneous-monochrome.png',
      },    {
        name: 'Udayan Das',
        role: 'Professor',
        imageUrl:
          'https://e7.pngegg.com/pngimages/791/512/png-clipart-user-profile-computer-icons-internet-bot-others-miscellaneous-monochrome.png',
      },
  ]
  
  const TeamSection = () => {
    return (
      <div className="bg-gray-300 py-24 sm:py-32 mx-15 rounded-3xl">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Meet our team
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
            Meet the dedicated team behind our recreation facility! Our passionate staff is committed to 
            creating a fun, safe, and engaging environment for all visitors. From fitness trainers to facility 
            managers, every team member plays a vital role in making your experience enjoyable. Get to know the 
            people who bring our community together!
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex bg-gray-500 items-center gap-x-6 p-3 rounded-2xl">
                  <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-gray-200">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

export default TeamSection