"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export function PhoneField({
  label = "Phone number",
  value,
  onChange,
}: {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="md:col-span-2">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <div className="phone-input-wrap mt-2">
        <PhoneInput
          country="us"
          value={value}
          onChange={onChange}
          enableSearch
          inputStyle={{
            width: "100%",
            height: "44px",
            fontSize: "14px",
            borderRadius: "0.75rem",
            border: "1px solid var(--border)",
            backgroundColor: "rgba(255,255,255,0.03)",
            color: "var(--foreground)",
            paddingLeft: "52px",
          }}
          buttonStyle={{
            borderTopLeftRadius: "0.75rem",
            borderBottomLeftRadius: "0.75rem",
            border: "1px solid var(--border)",
            borderRight: "none",
            backgroundColor: "rgba(255,255,255,0.03)",
          }}
          dropdownStyle={{ borderRadius: "0.75rem", fontSize: "13px" }}
          searchStyle={{
            width: "90%",
            height: "34px",
            borderRadius: "0.5rem",
            border: "1px solid var(--border)",
            backgroundColor: "var(--card)",
            color: "var(--foreground)",
          }}
          containerStyle={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
