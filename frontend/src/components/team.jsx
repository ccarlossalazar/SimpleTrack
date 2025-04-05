const people = [
    {
      name: 'Lori Umidon',
      role: 'Membership Services & Facility Operations Manager',
      imageUrl: 'https://www.stmarys-ca.edu/sites/default/files/styles/two_column_billboard/public/2024-12/Profile%20Pictures-163%20(1).jpg?itok=5oXXxMUU',
      email: 'ljs9@stmarys-ca.edu'
    },
    {
        name: 'Beckie Harper',
        role: 'Executive Director, Campus Recreation & Club Sports',
        imageUrl:
          'https://www.stmarys-ca.edu/sites/default/files/styles/two_column_billboard/public/2024-12/Beckie%20Harper%20Profile%20Picture%20%281%29.jpg?itok=mFomnqUI',
        email: 'rrh1@stmarys-ca.edu'
        },    {
        name: 'Mariel Littorno',
        role: 'Assistant Director of Campus Recreation Programs & Operations',
        imageUrl:
          'https://images.icon-icons.com/38/PNG/512/femaleuser_user_female_4515.png',
        email: 'myl4@stmarys-ca.edu'
        },    {
        name: 'Udayan Das',
        role: 'Professor',
        imageUrl:
          'https://e7.pngegg.com/pngimages/791/512/png-clipart-user-profile-computer-icons-internet-bot-others-miscellaneous-monochrome.png',
      },
  ]
  
  const TeamSection = () => {
    return (
      <div className="bg-[#003768] py-24 sm:py-32 mx-10 rounded-3xl">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
            Meet the dedicated team behind our recreation facility! Our passionate staff is committed to 
            creating a fun, safe, and engaging environment for all visitors. From fitness trainers to facility 
            managers, every team member plays a vital role in making your experience enjoyable. Get to know the 
            people who bring our community together!
            </p>
          </div>
          <ul role="list" className="grid gap-x-5 gap-y-8 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex bg-gray-400 items-center gap-x-6 p-3 rounded-2xl border-4">
                  <img alt="" src={person.imageUrl} className="size-18 object-cover rounded-full border-2 border-black" />
                  <div className="text-white">
                    <h3 className="text-lg font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm/6 font-semibold">{person.role}</p>
                    <a href={`mailto:${person.email}`}>{person.email}</a>
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