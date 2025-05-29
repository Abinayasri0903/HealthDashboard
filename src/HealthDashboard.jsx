import React from "react";
import { HeartPulse, Brain, Eye } from "lucide-react";

const appointments = [
  { day: "Thursday", time: "11:00 AM", title: "Health checkup complete", icon: "💉" },
  { day: "Saturday", time: "12:00 AM", title: "Cardiologist", icon: <HeartPulse className="w-4 h-4" /> },
  { day: "Saturday", time: "14:00 PM", title: "Ophthalmologist", icon: <Eye className="w-4 h-4" /> },
  { day: "Saturday", time: "16:00 PM", title: "Neurologist", icon: <Brain className="w-4 h-4" /> },
];

export default function HealthDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="col-span-1 bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <div className="mb-4">
          <div className="bg-gray-100 p-3 rounded-lg shadow">
            <h3 className="text-sm font-medium">Lungs</h3>
            <div className="w-full h-2 bg-red-200 rounded-full mt-2">
              <div className="w-3/5 h-full bg-red-600 rounded-full"></div>
            </div>
            <p className="text-xs mt-2">Date: 26 Oct 2021</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="bg-gray-100 p-3 rounded-lg shadow">
            <h3 className="text-sm font-medium">Teeth</h3>
            <div className="w-full h-2 bg-green-200 rounded-full mt-2">
              <div className="w-4/5 h-full bg-green-600 rounded-full"></div>
            </div>
            <p className="text-xs mt-2">Date: 26 Oct 2021</p>
          </div>
        </div>
        <div className="mb-4">
          <div className="bg-gray-100 p-3 rounded-lg shadow">
            <h3 className="text-sm font-medium">Bone</h3>
            <div className="w-full h-2 bg-orange-200 rounded-full mt-2">
              <div className="w-2/5 h-full bg-orange-600 rounded-full"></div>
            </div>
            <p className="text-xs mt-2">Date: 26 Oct 2021</p>
          </div>
        </div>
      </div>

      <div className="col-span-2 bg-white rounded-2xl shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Appointments</h2>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">+ Add</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-semibold">Dentist</h3>
            <p className="text-sm">Dr. Cameron Williamson</p>
            <p className="text-xs text-gray-500">09:00 - 11:00</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-semibold">Physiotherapy</h3>
            <p className="text-sm">Dr. Kevin Djones</p>
            <p className="text-xs text-gray-500">11:00 - 12:00</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">The Upcoming Schedule</h3>
          <div className="space-y-2">
            {appointments.map((appt, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded shadow">
                <div className="flex items-center gap-2">
                  <span>{appt.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{appt.title}</p>
                    <p className="text-xs text-gray-500">{appt.time}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">{appt.day}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
