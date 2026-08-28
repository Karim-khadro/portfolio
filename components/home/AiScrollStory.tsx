'use client';

import {useEffect, useRef, useState} from 'react';

type Step = {eyebrow: string; title: string; text: string; detail: string};
type Props = {label: string; title: string; summary: string; steps: Step[]; visual: {message: string; draft: string; approved: string; live: string}};

export function AiScrollStory({label, title, summary, steps, visual}: Props) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveStep(Number((visible.target as HTMLElement).dataset.step));
    }, {rootMargin: '-35% 0px -42% 0px', threshold: [0.1, 0.45, 0.8]});
    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="ai-story" aria-labelledby="ai-story-title">
      <div className="ai-shell ai-story__top"><p className="ai-eyebrow">{label}</p><div><h2 id="ai-story-title">{title}</h2><p>{summary}</p></div></div>
      <div className="ai-story__track">
        <div className="ai-shell ai-story__grid">
          <div className="ai-story__steps">
            {steps.map((step, index) => (
              <article className={`ai-story__step ${activeStep === index ? 'is-active' : ''}`} data-step={index} key={step.title} ref={(element) => { stepRefs.current[index] = element; }}>
                <span>0{index + 1}</span><div><p>{step.eyebrow}</p><h3>{step.title}</h3><p>{step.text}</p><small>{step.detail}</small></div>
              </article>
            ))}
          </div>
          <div className={`ai-story-visual is-step-${activeStep + 1}`} aria-live="polite">
            <div className="ai-story-visual__bar"><span /><span /><span /></div>
            <div className="ai-story-visual__body">
              <div className="ai-story-visual__message"><span>client</span><p>{visual.message}</p></div>
              <div className="ai-story-visual__path" aria-hidden="true"><i /></div>
              <div className="ai-story-visual__draft"><div><span>AI</span><b>{visual.draft}</b></div><p>{visual.approved}</p></div>
              <div className="ai-story-visual__live"><i /> {visual.live}</div>
            </div>
            <p className="ai-story-visual__caption">0{activeStep + 1} / 03</p>
          </div>
        </div>
      </div>
    </section>
  );
}
