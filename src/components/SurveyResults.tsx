import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "hsl(220, 80%, 55%)",
  "hsl(10, 80%, 55%)",
  "hsl(35, 90%, 55%)",
  "hsl(140, 60%, 45%)",
  "hsl(270, 60%, 55%)",
  "hsl(190, 70%, 45%)",
];

const ageData = [
  { name: "Under 18", value: 9.7 },
  { name: "18–20", value: 32.3 },
  { name: "21–23", value: 54.8 },
  { name: "24–26", value: 0 },
  { name: "27+", value: 3.2 },
];

const yearData = [
  { name: "1st year", value: 19.4 },
  { name: "2nd year", value: 9.7 },
  { name: "3rd year", value: 3.2 },
  { name: "4th year", value: 0 },
  { name: "Foundation year", value: 48.4 },
  { name: "Postgraduate", value: 19.4 },
];

const livingData = [
  { name: "Dormitory", value: 58.1 },
  { name: "Off-campus with roommates", value: 9.7 },
  { name: "With family", value: 16.1 },
  { name: "Alone", value: 16.1 },
];

const confidenceData = [
  { name: "1", value: 1 },
  { name: "2", value: 4 },
  { name: "3", value: 6 },
  { name: "4", value: 7 },
  { name: "5", value: 13 },
];

const nutritionSourceData = [
  { name: "Social media", value: 24 },
  { name: "Website/blogs", value: 19 },
  { name: "YouTube/podcasts", value: 16 },
  { name: "Friends/family", value: 14 },
  { name: "Doctors/dietitians", value: 14 },
  { name: "Don't actively seek", value: 4 },
  { name: "College courses", value: 1 },
];

const affordabilityData = [
  { name: "Very affordable", value: 0 },
  { name: "Somewhat affordable", value: 22.6 },
  { name: "Neutral", value: 45.2 },
  { name: "Somewhat unaffordable", value: 19.4 },
  { name: "Very unaffordable", value: 12.9 },
];

const easeData = [
  { name: "Very easy", value: 12.9 },
  { name: "Somewhat easy", value: 12.9 },
  { name: "Neutral", value: 45.2 },
  { name: "Somewhat difficult", value: 25.8 },
  { name: "Very difficult", value: 3.2 },
];

const fastFoodData = [
  { name: "Daily", value: 12.9 },
  { name: "3–5 times/week", value: 9.7 },
  { name: "1–2 times/week", value: 45.2 },
  { name: "A few times/month", value: 32.3 },
];

const barriersData = [
  { name: "Lack of time", value: 21 },
  { name: "Lack of motivation", value: 18 },
  { name: "Cost", value: 11 },
  { name: "Stress / emotional eating", value: 11 },
  { name: "Taste preferences", value: 10 },
  { name: "Cooking facilities", value: 8 },
  { name: "Healthy options nearby", value: 8 },
  { name: "Lack of cooking skills", value: 7 },
  { name: "Peer influence", value: 6 },
];

const helpData = [
  { name: "Discounts for healthy food", value: 21 },
  { name: "Cheaper meals on campus", value: 17 },
  { name: "More cafeteria options", value: 17 },
  { name: "Meal planning support", value: 14 },
  { name: "Healthy vending machines", value: 11 },
  { name: "Nutrition awareness", value: 10 },
  { name: "Better kitchen facilities", value: 9 },
  { name: "Cooking classes", value: 8 },
];

const environmentData = [
  { name: "1", value: 1 },
  { name: "2", value: 7 },
  { name: "3", value: 15 },
  { name: "4", value: 7 },
  { name: "5", value: 1 },
];

const campusOptionsData = [
  { name: "Grocery stores nearby", value: 19 },
  { name: "Cafeteria w/ healthy meals", value: 14 },
  { name: "Salad/healthy outlets", value: 12 },
  { name: "Healthy vending machines", value: 1 },
  { name: "None / very limited", value: 3 },
];

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  if (percent < 0.03) return null;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-[10px] font-semibold"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const PieChartCard = ({
  title,
  data,
}: {
  title: string;
  data: { name: string; value: number }[];
}) => (
  <div className="bg-card border border-border rounded-xl p-5">
    <h4 className="text-sm font-semibold text-foreground mb-3">{title}</h4>
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data.filter((d) => d.value > 0)}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomLabel}
          outerRadius={80}
          dataKey="value"
        >
          {data
            .filter((d) => d.value > 0)
            .map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip />
        <Legend
          wrapperStyle={{ fontSize: "11px" }}
          formatter={(value) => (
            <span className="text-muted-foreground">{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

const BarChartCard = ({
  title,
  data,
}: {
  title: string;
  data: { name: string; value: number }[];
}) => (
  <div className="bg-card border border-border rounded-xl p-5">
    <h4 className="text-sm font-semibold text-foreground mb-3">{title}</h4>
    <ResponsiveContainer width="100%" height={Math.max(220, data.length * 32)}>
      <BarChart data={data} layout="vertical" margin={{ left: 10, right: 30 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis type="number" tick={{ fontSize: 11 }} />
        <YAxis
          type="category"
          dataKey="name"
          width={140}
          tick={{ fontSize: 10 }}
        />
        <Tooltip />
        <Bar dataKey="value" fill="hsl(270, 60%, 55%)" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const SurveyResults = () => {
  return (
    <div className="mt-6 space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          Survey Results
        </span>
        <span className="text-xs text-muted-foreground">— 31 responses</span>
      </div>

      {/* Demographics */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Demographics
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PieChartCard title="Age Group" data={ageData} />
          <PieChartCard title="Year of Study" data={yearData} />
          <PieChartCard title="Living Situation" data={livingData} />
        </div>
      </div>

      {/* Knowledge & Sources */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Knowledge & Information Sources
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BarChartCard
            title="Confidence in Understanding Healthy Diet (1–5)"
            data={confidenceData}
          />
          <BarChartCard
            title="Where Do You Get Nutrition Info?"
            data={nutritionSourceData}
          />
        </div>
      </div>

      {/* Food Access & Habits */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Food Access & Habits
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PieChartCard title="Affordability of Healthy Food" data={affordabilityData} />
          <PieChartCard title="Ease of Finding Healthy Options" data={easeData} />
          <PieChartCard title="Fast Food / Processed Food Frequency" data={fastFoodData} />
        </div>
      </div>

      {/* Environment */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Environment & Support
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BarChartCard
            title="Does Your Environment Support Healthy Eating? (1–5)"
            data={environmentData}
          />
          <BarChartCard
            title="Healthy Options Available on/near Campus"
            data={campusOptionsData}
          />
        </div>
      </div>

      {/* Barriers & Solutions */}
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Barriers & Solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BarChartCard title="Biggest Barriers to Eating Healthy" data={barriersData} />
          <BarChartCard
            title="What Would Help You Eat Healthier?"
            data={helpData}
          />
        </div>
      </div>

      {/* Key Findings Summary */}
      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h4 className="text-sm font-semibold text-foreground">Key Findings</h4>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <div>
            <p className="font-medium text-foreground mb-1">🔴 Gaps Identified</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Lack of Motivation:</strong> Many cited laziness and
                difficulty translating awareness into action, preferring faster
                unhealthy options.
              </li>
              <li>
                <strong>Time & Effort:</strong> Heavy workloads make cooking
                impractical, leading to reliance on fast food or cafeterias.
              </li>
              <li>
                <strong>Cost:</strong> Healthy food is perceived as expensive
                compared to affordable unhealthy alternatives.
              </li>
              <li>
                <strong>Food Environment:</strong> Campus cafeterias use too much
                oil; university food is costly compared to outside options.
              </li>
              <li>
                <strong>Other:</strong> Food addiction, lack of imagination on
                how to start, eating disorders, and stress.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">🟢 Proposed Solutions</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Affordability:</strong> Make healthy "green food" cheaper
                and easier to access in canteens and dorms, with affordable meal
                plans.
              </li>
              <li>
                <strong>Education:</strong> Promote healthy diets from childhood,
                run workshops and cooking classes for students.
              </li>
              <li>
                <strong>Food Quality:</strong> Improve cafeteria cooking methods
                (less oil) and expand healthy menu options.
              </li>
              <li>
                <strong>Individual Responsibility:</strong> Encourage students to
                be more conscious about long-term health consequences.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyResults;
