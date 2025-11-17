import React from "react";
import useTEF from "./useGerman";
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
// --- This is the correct logic ---
const countryCodeOptions = getCountries().map(countryCode => {
  // getCountryCallingCode('IN') => '91'
  const callingCode = getCountryCallingCode(countryCode);
  // en['IN'] => 'India'
  const countryName = en[countryCode];
  
  return `${countryName} (+${callingCode})`;
  // We sort it alphabetically by country name for a better UX
}).sort();
// --- END NEW LOGIC ---

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { error?: string };

const Input: React.FC<InputProps> = ({ error, type, value, placeholder, ...props }) => {
  const isDate = type === "date";
  const showOverlay = isDate && !value;
  return (
    <div className="relative space-y-1">
      <input
        {...props}
        type={type}
        value={value}
        placeholder={isDate ? undefined : placeholder}
        className={`w-full rounded-lg border-none bg-[#F0EFF1] px-3 py-3 text-sm outline-none transition placeholder:opacity-60 ${showOverlay ? "date-mask-hidden" : ""}`}
      />
      {showOverlay && placeholder ? (
        <span className="pointer-events-none absolute left-3 top-3 text-sm text-[#B2B0BA]">
          {placeholder}
        </span>
      ) : null}
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  );
};

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }> = ({
  error,
  ...props
}) => (
  <div className="space-y-1">
    <textarea
      {...props}
      className={`w-full min-h-[100px] rounded-lg border-none bg-[#F0EFF1] px-3 py-3 text-sm text-[#000000] outline-none transition placeholder:opacity-60 ${
        error ? "border-red-400" : "border-gray-200"
      } focus:border-gray-400`}
    />
    {error ? <p className="text-xs text-red-500">{error}</p> : null}
  </div>
);

// New Select Component to handle dropdown logic and options
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
  placeholder: string;
  options: string[];
};

const Select: React.FC<SelectProps> = ({ error, placeholder, options, value, ...props }) => (
  <div className="relative space-y-1">
<select
  {...props}
  value={value}
  // Style to show placeholder color when no value is selected
  className={`w-full rounded-lg appearance-none border-none bg-[#F0EFF1] px-3 py-3 text-sm outline-none transition placeholder:opacity-60 
    ${value === "" ? "text-[#B2B0BA]" : "text-[#000000]"} `}
>
  <option value="" disabled hidden>
    {placeholder}
  </option>
  {options.map((option) => (
    <option
      key={option}
      value={option}
      className="!bg-[#FFFFFF80] !text-[#47464A] !border-none"
    >
      {option}
    </option>
  ))}
</select>

    {/* Custom chevron icon */}
    <span className="absolute right-3 top-3 text-sm text-[#47464A] pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    {error ? <p className="text-xs text-red-500">{error}</p> : null}
  </div>
);


const GermanForm: React.FC = () => {
  const {
    COLORS,
    content,
    form,
    setField,
    errors,
    touched,
    setTouched,
    handleSubmit,
    loading,
    tefGoalOptions,
    germanLevelOptions, // Destructuring new options from hook
  } = useTEF();

  // --- Redundant simulation block removed, as countryCodeOptions is now
  // defined at the top of the file. ---

  return (
    <div className="w-full md:w-[620px] md:pl-[40px]">
      <div className="mx-auto w/full max-w-[580px] rounded-2xl bg-[#FFFFFF] p-6 pt-16 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <h3 className="text-center text-[28px] font-semibold text-[#242325]">{content.formTitle}</h3>

        <div className="mt-6 grid grid-cols-1 gap-3">
          <Input // Full Name
            placeholder="Full Name"
            value={form.fullName}
            onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
            onChange={(e) => setField("fullName", e.target.value)}
            error={touched.fullName ? errors.fullName : undefined}
            required // Added required
          />

          <Input // Email Address
            placeholder="Email Address"
            type="email"
            value={form.email}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            onChange={(e) => setField("email", e.target.value)}
            error={touched.email ? errors.email : undefined}
            required // Added required
          />

          <div className="grid grid-cols-3 gap-3">
<Select
  placeholder="Country"
  value={form.countryCode || ""} // India should be selected by default since countryCode is 'IN'
  options={countryCodeOptions}
  onBlur={() => setTouched((t) => ({ ...t, countryCode: true }))}
  onChange={(e) => setField("countryCode", e.target.value)}
  error={touched.countryCode ? errors.countryCode : undefined}
  required // Added required
/>

            <div className="col-span-2">
              <Input // Phone Number
                placeholder="WhatsApp Number"
                type="tel"
                value={form.phone}
                onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                onChange={(e) => setField("phone", e.target.value)}
                error={touched.phone ? errors.phone : undefined}
                required // Added required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Select // Goal with German
              placeholder="Goal with German"
              value={form.goal}
              options={tefGoalOptions}
              onBlur={() => setTouched((t) => ({ ...t, goal: true }))}
              onChange={(e) => setField("goal", e.target.value)}
              error={touched.goal ? errors.goal : undefined}
              required // Added required
            />
            <Select // Current German Level
              placeholder="Current German Level"
              value={form.germanLevel}
              options={germanLevelOptions}
              onBlur={() => setTouched((t) => ({ ...t, germanLevel: true }))}
              onChange={(e) => setField("germanLevel", e.target.value)}
              error={touched.germanLevel ? errors.germanLevel : undefined}
              required // Added required
            />
          </div>

          <Input // Preferred Start Date
            type="date"
            placeholder="Preferred Start Date"
            value={form.startDate}
            onBlur={() => setTouched((t) => ({ ...t, startDate: true }))}
            onChange={(e) => setField("startDate", e.target.value)}
            error={touched.startDate ? errors.startDate : undefined}
            required // Added required
            min={new Date().toISOString().split("T")[0]} 
          />

<Textarea
  placeholder="Message (min 30 characters)"
  value={form.learningNeeds}
  onBlur={() => setTouched((t) => ({ ...t, learningNeeds: true }))} 
  error={touched.learningNeeds ? errors.learningNeeds : undefined}
  onChange={(e) => setField("learningNeeds", e.target.value)}
  required
  minLength={30}  
/>


<label className="mt-2 flex items-start gap-2 text-sm" style={{ color: "#D1D0D6" }}>
  <input
    type="checkbox"
    checked={form.consent}
    onChange={(e) => setField("consent", e.target.checked)}
    className="mt-1"
    required
  />
  <span className="text-[#A6A6A6]">{content.formConsent}</span>
</label>
{errors.consent && touched.consent && <p className="text-xs text-red-500">{errors.consent}</p>}

<label className="mt-2 flex items-start gap-2 text-sm" style={{ color: "#D1D0D6" }}>
  <input
    type="checkbox"
    checked={form.expertGuidance}
    onChange={(e) => setField("expertGuidance", e.target.checked)}
    className="mt-1"
    required
  />
  <span className="text-[#A6A6A6]">
    I’m serious about learning German and want expert guidance.
  </span>
</label>
{errors.expertGuidance && touched.expertGuidance && <p className="text-xs text-red-500">{errors.expertGuidance}</p>}


          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-2 inline-flex h-12 py-3 w-full items-center justify-center rounded-xl font-semibold transition-transform duration-150 hover:translate-y-[-1px] active:translate-y-0 disabled:opacity-60 bg-[#A190FC] text-[#FFFEF8]"
          >
            {loading ? "Submitting..." : content.ctas.submit}
          </button>
        </div>
      </div>
    </div>
  );
};


export default GermanForm;