import React from "react";

export default function Home() {
  return (
    <div>
      <div className="rounded-b-xl bg-indigo-600 p-5 pb-44 text-white">
        <div className="mb-4 flex items-center justify-between">
          <div className="rounded-lg bg-indigo-50/30 p-3 hover:bg-white hover:text-indigo-500">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
              ></path>
            </svg>
          </div>
          <h1 className="ext-center text-3xl font-semibold">Slice</h1>
          <div className="rounded-lg bg-indigo-50/30 p-3 hover:bg-white hover:text-indigo-500">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="space-y-2 text-center">
          <div className="text-slate-200">
            <svg
              className="mr-1 inline h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              ></path>
            </svg>
            <span>2s ago</span>
          </div>
          <div className="text-4xl font-bold tracking-wider">239.8</div>
          <div className="text-slate-200">$0.24 - 1,112 Sats</div>
        </div>
      </div>

      <div className="-mt-40 p-5">
        <div className="rounded-xl bg-white p-4 font-medium text-slate-500 shadow-sm">
          <div className="mb-3 text-sm">Choose range</div>
          <div className="mb-3">
            <div className="h-4 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            </div>
          </div>
          <div className="mb-4 flex justify-between">
            <div className="tracking-wides rounded-md bg-slate-100 py-1 px-2 text-xs font-semibold">
              Less ads
            </div>
            <div className="tracking-wides rounded-md bg-slate-100 py-1 px-2 text-xs font-semibold">
              Balanced
            </div>
            <div className="tracking-wides rounded-md bg-slate-100 py-1 px-2 text-xs font-semibold">
              More ads
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-lg bg-gray-800 py-4 px-5 font-medium tracking-wide text-white text-opacity-90 shadow-slate-100 hover:shadow-lg">
            <span className="mr-2">Withdraw</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <section className="p-5">
        <div className="mb-5 flex items-center justify-between">
          <h4 className="font-medium text-slate-500">Notifications</h4>
          <div className="rounded-md bg-pink-400/70 px-2 font-semibold text-gray-900">
            3
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex space-x-4 rounded-xl bg-white p-3 shadow-sm">
            <img
              className="aspect-square w-16 rounded-lg bg-center object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeOqFwpuGs8POfrytccjgsihqbnERH0hOXg&usqp=CAU"
              alt=""
            />
            <div>
              <h4 className="font-semibold text-gray-600">Don't miss out</h4>
              <p className="text-sm text-slate-400">
                Sometimes it really is ambiguous though
              </p>
            </div>
            <div>
              <button
                type="button"
                className="rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100"
              >
                &times;
              </button>
            </div>
          </div>
          <div className="flex space-x-4 rounded-xl bg-white p-3 shadow-sm">
            <img
              className="aspect-square w-16 rounded-lg bg-center object-cover"
              src="https://iconscout.com/iconscout_logo-1024x1024.png"
              alt=""
            />
            <div>
              <h4 className="font-semibold text-gray-600">Did you know?</h4>
              <p className="text-sm text-slate-400">
                An unlimited domain license has no domain restrictions
              </p>
            </div>
            <div>
              <button
                type="button"
                className="rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100"
              >
                &times;
              </button>
            </div>
          </div>
          <div className="flex space-x-4 rounded-xl bg-white p-3 shadow-sm">
            <img
              className="aspect-square w-16 rounded-lg bg-center object-cover"
              src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
              alt=""
            />
            <div>
              <h4 className="font-semibold text-gray-600">
                We are excited to share !!
              </h4>
              <p className="text-sm text-slate-400">
                Enter to win 1 out of 2 copies of Borderlands 3!
              </p>
            </div>
            <div>
              <button
                type="button"
                className="rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100"
              >
                &times;
              </button>
            </div>
          </div>
          <div className="flex space-x-4 rounded-xl bg-white p-3 shadow-sm">
            <img
              className="aspect-square w-16 rounded-lg bg-center object-cover"
              src="https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667"
              alt=""
            />
            <div>
              <h4 className="font-semibold text-gray-600">
                Using CSS and @layer
              </h4>
              <p className="text-sm text-slate-400">
                When you need to add truly custom CSS rules to a Tailwind
                project
              </p>
            </div>
            <div>
              <button
                type="button"
                className="rounded bg-slate-50 px-2 text-xl text-slate-500 hover:bg-slate-100"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
